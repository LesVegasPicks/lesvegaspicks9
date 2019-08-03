import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index9',
  templateUrl: './index9.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #000000;
      color: white;
      border-radius : 10px;
    }
    .dark-modal .modal-header {
      border : none
    }
    .dark-modal .close {
      color: white;
    }
  `]
})
export class Index9Component implements OnInit {

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  
  closeResult: string;

  id = 'JlvxDa7Sges';
  playerVars = {
    cc_lang_pref: 'en'
  };

  private player;
  private ytEvent;

  constructor(private modalService: NgbModal) {}


  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }
  playVideo() {
    this.player.playVideo();
  }
  pauseVideo() {
    this.player.pauseVideo();
  }
  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg'  });
  }
  

  ngOnInit() {

    this.myStyle = {
      'position': 'absolute',
      'width': '100%',
      'height': '100%',
      'z-index': 11,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = {
      particles: {
        number: {
          value: 50,
          density: {
            enable: false
          }
        },
        color: {
          value: "#000"
        },
        opacity: {
          value: 1,
          anim: {
            enable: false
          }
        },
        shape: {
          type: ["circle","edge","polygon"],
          stroke: {
            width: 4,
            color: "#fff"
          },
          polygon: {
            nb_sides: 6
          }
        },
        size: {
          value: 25,
          random: true,
          anim: {
            enable: true,
            speed: 20,
            size_min: 10,
            sync: false
          }
        },
        line_linked: {
          enable: false
        },
        move: {
          enable: true,
          speed: 3,
          direction: "none",
          straight: false
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: false
          }
        },
        modes: {
          push: {
            particles_nb: 12
          }
        }
      }
    };
  }
}
