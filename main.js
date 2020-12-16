const app = Vue.createApp({
    // data
    data() {
        return {
            "x": 0,
            "y": 0,
            "z": 0,
            "rgb": 'rgb(0,0,0)',
            "hexadecimal": '#fff',
        }
    },
    // methods
    methods: {
        // pick color 
        pickColor(e) {
            const colorBox = document.getElementById('color-box');
            // choose random color
            randomNum1 = Math.floor(Math.random() * 255);
            randomNum2 = Math.floor(Math.random() * 255);
            randomNum3 = Math.floor(Math.random() * 255);
            setTimeout(() => {
                this.x = randomNum1;
            }, 1500);

            setTimeout(() => {
                this.y = randomNum2;
            }, 1500);

            setTimeout(() => {
                this.z = randomNum3;
            }, 1500);

            let color = `rgb(${this.x},${this.y},${this.z})`;

            colorBox.style.background = color;
            let rgb = document.getElementById('rgb');
            let hexadecimal = document.getElementById('hex');

            // select color using dblclick
            e.target.addEventListener('dblclick', (e) => {
                // remove mousemove event listener
                this.hasColor = true;
                // rgb = color;
                color = rgb.value = color;
                let hex = this.rgbToHex(this.x, this.y, this.z);
                hexadecimal.value = hex;
                this.rgb = color;
                this.hexadecimal = color;
                this.showBgColor();
            });
            // set the color if mouse leave
            e.target.addEventListener('mouseleave', () => {
                e.target.style.background = this.hexadecimal;
            })
        },
        // convert rgb to hexadecimal
        rgbToHex(r, g, b) {
            return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
        },
        componentToHex(c) {
            var hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        },

        // function to show color in mini box in the dom
        showBgColor() {
            document.querySelector('.mini-color').style.background = `${this.hexadecimal}`;
        },
        // copy 
        copyRgb() {
            /* Get the text field */
            let copyText = document.getElementById("rgb");

            /* Select the text field */
            copyText.select();
            copyText.setSelectionRange(0, 99999); /* For mobile devices */

            /* Copy the text inside the text field */
            document.execCommand("copy");

            /* Alert the copied text */
            alert("Copied color: " + copyText.value);
        },
        // copy 
        copyHex() {
            /* Get the text field */
            let copyText = document.getElementById("hex");

            /* Select the text field */
            copyText.select();
            copyText.setSelectionRange(0, 99999); /* For mobile devices */

            /* Copy the text inside the text field */
            document.execCommand("copy");

            /* Alert the copied text */
            alert("Copied color: " + copyText.value);
        },
    },
});

app.mount('#app');