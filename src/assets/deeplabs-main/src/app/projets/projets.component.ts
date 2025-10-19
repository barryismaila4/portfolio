import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent {
  projects = [
    {
      title: 'E-Commerce',
      badge: 'https://img.shields.io/badge/E--Commerce-SpringBoot_Angular_FastAPI-6DB33F?logo=springboot&logoColor=white&style=for-the-badge',
      videoId: 'zb-1vgltNRw',
      type: 'video'
    },
    {
      title: 'FastAPI - Angular ',
      badge: 'https://img.shields.io/badge/FastAPI_SpringBoot_Angular-FullStack-009688?logo=angular&logoColor=white&style=for-the-badge',
      videoId: 'R-6O1DkFi00',
      type: 'video'
    },
    {
      title: 'Symfony - Twig',
      badge: 'https://img.shields.io/badge/Symfony-Twig-000000?logo=symfony&logoColor=white&style=for-the-badge',
      videoId: 'pX0dJFUNsqc',
      type: 'video'
    },
    {
      title: 'Projet C',
      badge: 'https://img.shields.io/badge/Project-C-005D3D?logo=c&logoColor=white&style=for-the-badge',
      videoId: '5UMdPxNBSdk',
      type: 'video'
    },
    {
      title: 'Spring Boot - Angular',
      badge: 'https://img.shields.io/badge/Spring_Boot-Angular-6DB33F?logo=spring&logoColor=white&style=for-the-badge',
      videoId: 'eBS3lCAYvNI',
      type: 'video'
    }
  ];

  externalProjects = [
    {
      title: 'Malielectronics Laboratory',
      badge: 'https://img.shields.io/badge/Malielectronics_Laboratory-Website-0078D4?style=for-the-badge',
      url: 'https://malielectronicslaboratory.online',
      isExternal: true,
      type: 'website'
    },
    {
      title: 'Big E-Commerce Project (Spring Boot + Angular)',
      badge: 'https://img.shields.io/badge/E--Commerce-GitHub-333?style=for-the-badge',
      url: 'https://github.com/barryismaila4/E-Commerce-Springboot-Angular',
      isExternal: true,
      type: 'github'
    }
  ];

  selectedVideo: string | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  showVideo(videoId: string | undefined) {
    if (videoId) {
      this.selectedVideo = videoId;
    }
  }

  closeVideo() {
    this.selectedVideo = null;
  }

  sanitizeUrl(videoId: string | undefined): SafeResourceUrl | undefined {
    if (videoId) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}?autoplay=1`);
    }
    return undefined;
  }

  openExternalLink(url: string | undefined) {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
