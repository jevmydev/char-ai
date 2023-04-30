import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ChatterProvider } from "./context/chatter";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const HomePage = lazy(() => import("./pages/HomePage"));
const ChatPage = lazy(() => import("./pages/ChatPage"));

export const App = () => {
    return (
        <ChatterProvider>
            <Header />
            <main>
                <Suspense>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/chat/:character" element={<ChatPage />} />
                        <Route path="/*" element={<HomePage />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
        </ChatterProvider>
    );
};

export default App;
