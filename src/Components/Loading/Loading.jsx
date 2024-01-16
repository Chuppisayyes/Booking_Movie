import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../lotties/loading.json'
import { BeatLoader } from "react-spinners";

export default function Loading() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div style={{ marginTop: '100px', textAlign: 'center' }}>
            <BeatLoader margin={10} size={40} color="#36d7b7" />
            <Lottie
                options={defaultOptions}
                height={1000}
                width={400}
            />
        </div>
    );
}
