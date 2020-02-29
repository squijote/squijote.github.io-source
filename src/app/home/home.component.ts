import * as myGlobals from "../globals";
import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { fadeIn } from '../router-animations';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // animations: [fadeIn()],
  // host: {'[@fadeIn' : ''}
})
export class HomeComponent implements OnInit, OnDestroy {
  particleStyle: object = {};
  particleParams: object = {};
  typedOptions: object = {};
  typedDesktop: object = {};
  typedMobile: object = {};
  width: number = 100;
  height: number = 100;

	constructor(@Inject(WINDOW) private window: Window, private router: Router, private route: ActivatedRoute) {}

	ngOnInit() {
    this.typedOptions = {
      strings: [
        "jr. software engineer",
        "feel free to spin on your chair",
        "may the forks be with you",
        "tossed a coin to a witcher",
        "/* todo  Insert more witty messages */",
        "oh, you're still here?",
        "let's go back"
      ],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 5000,
      showCursor: true,
      cursorChar: '|',
      loop: true
    };
    this.typedDesktop = new Typed('.typed-element-desktop', this.typedOptions);
    this.typedMobile = new Typed('.typed-element-mobile', this.typedOptions);

    // this.particleStyle = {
    //   'position': 'fixed',
    //   'width': '100%',
    //   'height': '100%',
    //   'z-index': -1,
    //   'top': 0,
    //   'left': 0,
    // }

    // this.particleParams = {
    //   particles: {
    //     number: {
    //       value: 50,
    //       density: {
    //         enable: true,
    //         value_area: 800
    //       }
    //     },
    //     color: { value: "#eeeeee" },
    //     shape: {
    //       type: "circle",
    //       stroke: {
    //         width: 0,
    //         color: "#000000"
    //       },
    //       polygon: { nb_sides: 5 }
    //     },
    //     opacity: {
    //       value: 0.5,
    //       random: false,
    //       anim: {
    //         enable: false,
    //         speed: 1,
    //         opacity_min: 0.1,
    //         sync: false
    //       }
    //     },
    //     size: {
    //       value: 1,
    //       random: true,
    //       anim: {
    //         enable: false,
    //         speed: 40,
    //         size_min: 0.1,
    //         sync: false
    //       }
    //     },
    //     line_linked: {
    //       enable: true,
    //       distance: 150,
    //       color: "#eeeeee",
    //       opacity: 0.4,
    //       width: 1
    //     },
    //     move: {
    //       enable: true,
    //       speed: 6,
    //       direction: "none",
    //       random: false,
    //       straight: false,
    //       out_mode: "out",
    //       bounce: false,
    //       attract: {
    //         enable: false,
    //         rotateX: 600,
    //         rotateY: 1200
    //       }
    //     }
    //   },
    //   interactivity: {
    //     detect_on: "canvas",
    //     events: {
    //       onhover: {
    //         enable: false,
    //         mode: "repulse"
    //       },
    //       onclick: {
    //         enable: false,
    //         mode: "push"
    //       },
    //       resize: true
    //     },
    //     modes: {
    //       grab: {
    //         distance: 200,
    //         line_linked: { opacity: 1 }
    //       },
    //       bubble: {
    //         distance: 400,
    //         size: 40,
    //         duration: 2,
    //         opacity: 8,
    //         speed: 3
    //       },
    //       repulse: {
    //         distance: 200,
    //         duration: 0.4
    //       },
    //       push: { particles_nb: 4 },
    //       remove: { particles_nb: 2 }
    //     }
    //   },
    //   retina_detect: true
    // }
  }

  ngOnDestroy() {
  }
}
