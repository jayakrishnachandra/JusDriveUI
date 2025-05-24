// // import { Component, HostListener } from '@angular/core';

// // @Component({
// //   selector: 'app-header',
// //   standalone: true,
// //   imports: [],
// //   templateUrl: './header.component.html',
// //   styleUrl: './header.component.scss'
// // })

// // export class HeaderComponent {
// //   isSidebarVisible: boolean = false;
// //   isMobile: boolean = false;

// //   // Check screen size on window resize
// //   @HostListener('window:resize', ['$event'])
// //   onResize(event: any) {
// //     this.checkScreenSize();
// //   }

// //   ngOnInit() {
// //     this.checkScreenSize();
// //   }

// //   // Detect if the device is mobile
// //   checkScreenSize() {
// //     this.isMobile = window.innerWidth <= 768;
// //     if (!this.isMobile) {
// //       this.isSidebarVisible = false; // Always show sidebar on large screens
// //     }
// //   }

// //   // Toggle sidebar visibility on mobile
// //   toggleSidebar() {
// //     if (this.isMobile) {
// //       this.isSidebarVisible = !this.isSidebarVisible;
// //     }
// //   }

// //   // Close sidebar when clicking outside
// //   closeSidebar() {
// //     this.isSidebarVisible = false;
// //   }

// // }
// import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
// import { CommonModule, isPlatformBrowser } from '@angular/common';

// @Component({
//   selector: 'app-header',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss']
// })
// export class HeaderComponent implements OnInit {
//   isSidebarVisible: boolean = false;
//   isMobile: boolean = false;

//   constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

//   @HostListener('window:resize', ['$event'])
//   onResize(event: any) {
//     if (isPlatformBrowser(this.platformId)) {
//       this.checkScreenSize();
//     }
//   }

//   ngOnInit() {
//     if (isPlatformBrowser(this.platformId)) {
//       this.checkScreenSize();
//     }
//   }

//   checkScreenSize() {
//     this.isMobile = window.innerWidth <= 768;
//     // For larger screens, hide the mobile sidebar (which is toggled by the 3-dot menu)
//     if (!this.isMobile) {
//       this.isSidebarVisible = false;
//     }
//   }

//   toggleSidebar() {
//     if (this.isMobile) {
//       this.isSidebarVisible = !this.isSidebarVisible;
//     }
//   }

//   closeSidebar() {
//     this.isSidebarVisible = false;
//   }
// }


import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMobile: boolean = false;

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    // Use a guard in case window isn't defined
    if (typeof window !== 'undefined') {
      this.isMobile = window.innerWidth <= 768;
    }
  }
}



