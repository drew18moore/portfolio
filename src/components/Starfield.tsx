import { useEffect, useRef } from "react";

const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  let stars: { x: number; y: number; z: number }[] = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const numStars = 250;

    function createStars() {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: (Math.random() - 0.5) * width,
          y: (Math.random() - 0.5) * height,
          z: Math.random() * width,
        });
      }
    }

    function drawStars() {
      ctx!.fillStyle = "black";
      ctx!.fillRect(0, 0, width, height);

      for (let star of stars) {
        star.z -= 2;
        if (star.z <= 0) {
          star.z = width;
        }

        const k = 128.0 / star.z;
        const x = star.x * k + width / 2;
        const y = star.y * k + height / 2;

        if (x < 0 || x >= width || y < 0 || y >= height) continue;

        const size = (1 - star.z / width) * 2;
        ctx!.beginPath();
        ctx!.arc(x, y, size, 0, 2 * Math.PI);
        ctx!.fillStyle = "white";
        ctx!.fill();
      }

      requestAnimationFrame(drawStars);
    }

    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width;
      canvas!.height = height;
      createStars();
    }

    window.addEventListener("resize", handleResize);
    createStars();
    drawStars();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
        display: "block",
        background: "black",
      }}
    />
  );
};

export default Starfield;