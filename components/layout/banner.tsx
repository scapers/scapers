import Image from 'next/image';

const Banner = () => {
    return (
        <>
            <div style={{height: '250px', position:'relative'}}>
                <Image src="/assets/img/backgrounds/home.jpg"
                       fill
                       width={0}
                       height={0}
                       priority={true}
                       layout={'fill'}
                       style={{ objectFit: "cover" }}
                       alt="Banner"/>
            </div>
        </>
    );
};

export default Banner;