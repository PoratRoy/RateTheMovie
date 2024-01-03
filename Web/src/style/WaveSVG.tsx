import { BACKGROUND_COLOR, PRIMARY_COLOR } from "./root";

const WaveSVG: React.FC = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            transform="scale(-1, 1)"
            style={{
                filter: `drop-shadow(0 -10px 20px ${PRIMARY_COLOR})`,
                position: "fixed",
                bottom: "64vh",
                left: 0,
                zIndex: 1,
            }}
        >
            <path
                fill={BACKGROUND_COLOR}
                fillOpacity="1"
                d="M0,128L60,154.7C120,181,240,235,360,256C480,277,600,267,720,240C840,213,960,171,1080,165.3C1200,160,1320,192,1380,208L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
        </svg>
    );
};

export default WaveSVG;
