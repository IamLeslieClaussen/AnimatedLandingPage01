import gsap from "gsap";

gsap.registerPlugin(SplitText, CustomEase)
CustomEase("hop", "0.8, 0, 0.1");

const ROTATING_WORDS = ["Studios", "Season", "Chamber, "Archive", "Vision"]

const prloader = document.querySelector(".preloader");
const preloaderCounter = document.querySelector(".preloader-counter h1");
const preloaderWord = document