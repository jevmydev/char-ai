import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";

const HomePage = lazy(() => import("./pages/HomePage"));
const ChatPage = lazy(() => import("./pages/ChatPage"));

export const App = () => {
    return (
        <>
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
        </>
    );
};

export default App;
