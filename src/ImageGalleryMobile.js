import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';
import testimg1 from './images/testimg1.png';
import testimg2 from './images/testimg2.jpg';
import testimg3 from './images/testimg3.jpg';
import testimg4 from './images/testimg4.jpg';
import testimg5 from './images/testimg5.jpg';

const slides = [
    { id: 0, img: testimg1 },
    { id: 1, img: testimg2 },
    { id: 2, img: testimg3 },
    { id: 3, img: testimg4 },
    { id: 4, img: testimg5 }
];

const ImageGalleryMobile = () => {
    const [index, set] = useState(0);
    const transitions = useTransition(slides[index], item => item.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
    });
    useEffect(() => void setInterval(() => set(state => (state + 1) % 5), 3000), []);
    return transitions.map(({ item, props, key }) => (
        <div id="imageGalMobileContainer">
            <animated.div
            key={key}
            class="imageGalMobile"
            style={{ ...props, backgroundImage: `url(${item.img})`}}
            />
        </div>
    ));
}

export default ImageGalleryMobile