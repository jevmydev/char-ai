export const FavIcon = ({ width = "w-8", height = "h-8" }) => {
    return <img className={`${width} ${height} aspect-square rounded object-cover`} src="/favicon.webp" alt="Icono de char-ai" decoding="async" />;
};
