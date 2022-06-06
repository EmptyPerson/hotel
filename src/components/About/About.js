import React from 'react';
import Gallery from '../Gallery/Gallery'
import './About.scss'
const imgUrls = ['https://source.unsplash.com/PC_lbSSxCZE/800x600','https://source.unsplash.com/lVmR1YaBGG4/800x600','https://source.unsplash.com/5KvPQc1Uklk/800x600','https://source.unsplash.com/GtYFwFrFbMA/800x600','https://source.unsplash.com/Igct8iZucFI/800x600','https://source.unsplash.com/M01DfkOqz7I/800x600','https://source.unsplash.com/MoI_cHNcSK8/800x600','https://source.unsplash.com/M0WbGFRTXqU/800x600','https://source.unsplash.com/s48nn4NtlZ4/800x600','https://source.unsplash.com/E4944K_4SvI/800x600','https://source.unsplash.com/F5Dxy9i8bxc/800x600','https://source.unsplash.com/iPum7Ket2jo/800x600'
];

const About = () => {

    return (
        <div className="container">
            <div className="criterion">
                <div className="text text0">П</div>
                <div className="text text1">р</div>
                <div className="text text2">и</div>
                <div className="text text3">в</div>
                <div className="text text4">е</div>
                <div className="text text5">т</div>
                <div className="text text6">с</div>
                <div className="text text7">т</div>
                <div className="text text8">в</div>
                <div className="text text9">у</div>
                <div className="text text10">е</div>
                <div className="text text11">м</div>
                <div className="text text12">&#9883;</div>
            </div>
            <Gallery imgs = {imgUrls}/>
        </div>

    );
};

export default About;