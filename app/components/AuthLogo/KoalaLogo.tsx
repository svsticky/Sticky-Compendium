// @flow
import * as React from "react";

type Props = {
    size?: number,
    fill?: string,
    className?: string,
};

function KoalaLogo({ size = 34, fill = "#FFF", className }: Props) {
    return (
        <svg
            fill={fill}
            width={size}
            height={size}
            enable-background="new 0 0 144 144" version="1.1" viewBox="0 0 144 144" xmlns="http://www.w3.org/2000/svg">

            <g transform="translate(0 144) scale(.1 -.1)">
                <path d="m144.5 1095.5c-68.8-34.4-93.2-65.5-119.9-152.1-17.7-54.4-18.8-69.9-6.6-111 22.2-74.3 63.3-137.6 108.8-165.4 23.3-14.4 44.4-30 45.5-34.4 2.2-4.4 12.2-8.9 21.1-8.9 10 0 14.4-6.7 10-16.6-4.4-12.2 2.2-16.6 24.4-15.5 16.6 0 23.3 3.3 15.5 6.7-11.1 4.4-11.1 8.9-1.1 21.1s8.9 16.6-5.5 22.2c-10 3.3-15.5 11.1-12.2 15.5 3.3 5.5-17.8 20-45.5 33.3-68.8 33.3-107.7 94.3-113.2 177.6-12.2 172 138.7 259.7 320.8 183.1 38.8-15.5 78.8-32.2 87.7-35.5s4.4 6.7-11.1 23.3c-43.3 47.7-108.8 76.6-188.7 81-62.3 4.4-81.1 1.1-130-24.4z" />
                <path d="m1096.8 991.1c-44.4-12.2-89.9-34.4-89.9-46.6 0-4.4 21.1-2.2 47.7 3.3 64.4 14.4 172 5.5 222-18.9 85.5-41.1 127.6-150.9 91-240.8-33.3-85.5-106.6-142.1-183.1-142.1-22.2 0-33.3-5.5-33.3-16.6 0-8.9-4.4-16.6-10-16.6-17.8 0-21.1-42.2-4.4-48.8 23.3-10 25.5-8.9 25.5 11.1 0 11.1 6.7 15.5 16.6 11.1 8.9-3.3 16.6-2.2 16.6 2.2s25.5 16.6 55.5 27.7c94.3 33.3 146.5 94.3 173.1 202 4.4 18.9 6.7 41.1 5.5 49.9-20 133.2-106.6 215.3-236.4 226.4-32 3.4-75.3 1.2-96.4-3.3z" />
                <path d="m458.6 664.8c-13.3-10-18.9-25.5-15.5-46.6 3.3-30 7.8-33.3 42.2-33.3s38.8 3.3 42.2 33.3c3.3 28.9-18.9 61-42.2 61-3.3 0.1-15.6-6.6-26.7-14.4z" />
                <path d="m628.5 651.5c-40-21.1-55.5-65.5-59.9-166.5-3.3-79.9-2.2-87.7 24.4-112.1 40-36.6 106.5-36.6 139.8 0 37.7 40 69.9 185.4 52.2 229.7-24.5 57.8-97.7 81.1-156.5 48.9z" />
                <path d="m868.2 608.2c-12.2-8.9-17.8-24.4-14.4-45.5 3.3-30 7.8-33.3 42.2-33.3 36.6 0 38.8 2.2 38.8 37.7 0 43.3-34.4 65.5-66.6 41.1z" />
            </g>
            <path d="m26.9 57.5c-2.6 9.5 5.6 18.9-4.5 16.1s-16.2-12.7-13.6-22.2 13-14.9 23.1-12.1-2.4 8.7-5 18.2z" />
            <path d="m114.3 68.2c-3.3-9.2-15.5-12.2-5.7-15.7 9.9-3.6 20.6 1.1 23.9 10.3s-2 19.6-11.9 23.2c-9.8 3.5-3-8.5-6.3-17.8z" />
            <circle cx="62.1" cy="104.6" r="1.3" />
            <circle cx="69.2" cy="105.9" r="1.3" />
        </svg>


    );
}

export default KoalaLogo;
