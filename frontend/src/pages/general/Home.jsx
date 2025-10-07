import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../../styles/reels.css'
import ReelFeed from '../../components/ReelFeed'

const Home = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/food", { withCredentials: true })
            .then(response => {
                // Ensure likeCount and savesCount are numbers
                const foodItems = response.data.foodItems.map(item => ({
                    ...item,
                    likeCount: item.likeCount || 0,
                    savesCount: item.savesCount || 0
                }));
                setVideos(foodItems);
            })
            .catch(err => console.error("Error fetching food items:", err));
    }, []);

    async function likeVideo(item) {
        try {
            const response = await axios.post(
                "http://localhost:3000/api/food/like",
                { foodId: item._id },
                { withCredentials: true }
            );

            setVideos((prev) => prev.map((v) => {
                if (v._id !== item._id) return v;
                const currentCount = v.likeCount || 0;
                return {
                    ...v,
                    likeCount: response.data.like
                        ? currentCount + 1
                        : Math.max(currentCount - 1, 0) // prevent negative
                };
            }));

            console.log(response.data.like ? "Video liked" : "Video unliked");
        } catch (err) {
            console.error("Error liking video:", err);
        }
    }

    async function saveVideo(item) {
        try {
            const response = await axios.post(
                "http://localhost:3000/api/food/save",
                { foodId: item._id },
                { withCredentials: true }
            );

            setVideos((prev) => prev.map((v) => {
                if (v._id !== item._id) return v;
                const currentCount = v.savesCount || 0;
                return {
                    ...v,
                    savesCount: response.data.save
                        ? currentCount + 1
                        : Math.max(currentCount - 1, 0) // prevent negative
                };
            }));

            console.log(response.data.save ? "Video saved" : "Video unsaved");
        } catch (err) {
            console.error("Error saving video:", err);
        }
    }

    return (
        <ReelFeed
            items={videos}
            onLike={likeVideo}
            onSave={saveVideo}
            emptyMessage="No videos available."
        />
    );
}

export default Home;
