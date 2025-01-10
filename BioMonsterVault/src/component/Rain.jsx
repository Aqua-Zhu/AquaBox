import { useEffect, useRef } from "react";

export default function Rain() {

    const rainRef = useRef(null)








    useEffect(() => {
        // Setting up the letters
        var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
        // letters = letters.split('');

        // Initialising the canvas
        var canvas = document.querySelector('canvas');
        var ctx = canvas.getContext('2d');
        // Setting the width and height of the canvas
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Setting up the columns
        var fontSize = 10;
        var columns = canvas.width / fontSize;
        // Setting up the drops
        var drops = [];
        for (var x = 0; x < columns; x++) {
            drops[x] = 1;
        }

        // Setting up the draw function
        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, .06)';
            // fillRect(x, y, width, height)
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            for (var i = 0; i < drops.length; i++) {
                var text = letters[Math.floor(Math.random() * letters.length)];
                // // 也可以使用charAt() => 會返回指定索引(index)的String
                // const sentence = 'The quick brown fox jumps over the lazy dog.';
                // const index = 4;
                // console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
                // // Expected output: "The character at index 4 is q"
                ctx.fillStyle = '#03FDF9';
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                drops[i]++;
                if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
                    drops[i] = 0;
                }
            }
        }
        // Loop the animation
        setInterval(draw, 30);
    }, [])

    return (
        <>
            <canvas id="rain" ref={rainRef}></canvas>
        </>
    )

}