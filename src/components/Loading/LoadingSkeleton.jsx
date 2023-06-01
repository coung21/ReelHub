import React from 'react'
import './LoadingSkeleton.css'
export default function LoadingSkeleton({ className = '' }) {
    return (
        <div
            className={`skeleton ${className}`}
        >
        </div>
    )
}
