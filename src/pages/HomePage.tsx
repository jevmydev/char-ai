import Hero from "../components/Hero/Hero";
import Characters from "../components/Characters/Characters";
import Create from "../components/Create/Create";

export const HomePage = () => {
    return (
        <>
            <Hero />
            <Characters />
            <Create />
        </>
    );
};

export default HomePage;
