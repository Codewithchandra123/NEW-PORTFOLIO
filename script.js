document.querySelector(".cross").style.display = "none";

// Function to hide the hamburger icon if the screen size is larger than 900px
function checkScreenSize() {
    if (window.innerWidth > 900) {
        document.querySelector(".hamburger").style.display = "none";
    } else {
        document.querySelector(".hamburger").style.display = "block";
    }
} 

// Call the function initially to set the correct state on page load
checkScreenSize();

// Add an event listener to check the screen size whenever the window is resized
window.addEventListener('resize', checkScreenSize);

// Function to handle the hamburger icon click
document.querySelector(".hamburger").onclick = function() {
  let cross=  document.querySelector(".cross").style.position='fixed'  ;
 
    let box = document.querySelector('.boxham');
    if (!box.classList.contains('show')) {
        box.classList.remove('hide');
        box.classList.add('show');
        box.style.display = "block";
        document.querySelector(".hamburger").style.display = "none";
        document.querySelector(".cross").style.display = "block";
    }
    box.innerHTML = '';

    // Create and append the 'home' element
    let home = document.createElement('h2');
    let homeLink = document.createElement('a');
    homeLink.href = '#home'; // Set the URL for home
    homeLink.innerText = 'HOME';
    home.classList.add('home1');
    home.appendChild(homeLink);
    box.appendChild(home);

    // Create and append the 'about' element
    let about = document.createElement('h2');
    let aboutLink = document.createElement('a');
    aboutLink.href = '#about'; // Set the URL for about
    aboutLink.innerText = 'ABOUT';
    about.classList.add('about');
    about.appendChild(aboutLink);
    box.appendChild(about);

    // Create and append the 'experience' element
    let experience = document.createElement('h2');
    let experienceLink = document.createElement('a');
    experienceLink.href = '#experience'; 
    experienceLink.innerText = 'EXPERIENCE';
    experience.classList.add('home1');
    experience.appendChild(experienceLink);
    box.appendChild(experience);

    // Create and append the 'project' element
    let project = document.createElement('h2');
    let projectLink = document.createElement('a');
    projectLink.href = '#project'; // Set the URL for project
    projectLink.innerText = 'PROJECT';
    project.classList.add('project1');
    project.appendChild(projectLink);
    box.appendChild(project);

    // Create and append the 'contact' element
    let contact = document.createElement('h2');
    let contactLink = document.createElement('a');
    contactLink.href = '#contact'; // Set the URL for contact
    contactLink.innerText = 'CONTACT';
    contact.classList.add('contact1');
    contact.appendChild(contactLink);
    box.appendChild(contact);

    let hireme =document.createElement('h2');
    let hierlink=document.createElement('a');
    hierlink.href='#hierme';
    hierlink.innerText='Hired me with';
    hireme.appendChild(hierlink);
    hireme.classList.add('contact1');
    box.appendChild(hireme);

    let certificate =document.createElement('h2');
    let certilink=document.createElement('a');
    certilink.href='#certi';
    certilink.innerText='Certificates';
    certificate.appendChild(certilink);
    certificate.classList.add('contact1');
    box.appendChild(certificate);

    let arch=document.createElement('h2');
    let arcilink=document.createElement('a');
    arcilink.href='#archivement';
    arcilink.innerText='Achivement';
    arch.appendChild(arcilink);
    arch.classList.add('contact1');
    box.appendChild(arch);

}

// Function to handle the cross icon click
document.querySelector(".cross").onclick = function() {
    let box = document.querySelector('.boxham');
    if (box.classList.contains('show')) {
        box.classList.remove('show');
        box.classList.add('hide');
        

        document.querySelector(".cross").style.display = "none";
        document.querySelector(".hamburger").style.display = "block";
    }
}

// Auto-scrolling functionality for the slid-box with seamless looping
 

document.addEventListener("DOMContentLoaded", function() {
  const slidBox = document.querySelector('.slid-box');
  if (!slidBox) return;

  // Duplicate the content for seamless looping
  slidBox.innerHTML += slidBox.innerHTML;

  let scrollInterval = null;
  let speed = 2; // Adjust speed as needed

  // Desktop: Auto-scroll on mouse hover
  slidBox.addEventListener('mouseenter', function() {
    scrollInterval = setInterval(() => {
      if (slidBox.scrollLeft >= slidBox.scrollWidth / 2) {
        slidBox.scrollLeft = 0;
      } else {
        slidBox.scrollLeft += speed;
      }
    }, 20);
  });

  slidBox.addEventListener('mouseleave', function() {
    clearInterval(scrollInterval);
    scrollInterval = null;
  });

  // Mobile: Drag/swipe to scroll
  let isDown = false;
  let startX;
  let scrollLeft;

  slidBox.addEventListener('touchstart', function(e) {
    isDown = true;
    startX = e.touches[0].pageX - slidBox.offsetLeft;
    scrollLeft = slidBox.scrollLeft;
  });

  slidBox.addEventListener('touchend', function() {
    isDown = false;
  });

  slidBox.addEventListener('touchmove', function(e) {
    if (!isDown) return;
    const x = e.touches[0].pageX - slidBox.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed as needed
    slidBox.scrollLeft = scrollLeft - walk;
  });
});

//educational section content start //
 
document.addEventListener("DOMContentLoaded", function() {
  function revealOnScroll() {
    const cards = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < windowHeight - 50) {
        card.classList.add('visible');
      } else {
        card.classList.remove('visible');
      }
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Initial check
});
 
//for mobile view touch effect on educational section images

document.querySelectorAll('.edu-img').forEach(img => {
  img.addEventListener('touchstart', function() {
    this.classList.add('touch-active');
  });
  img.addEventListener('touchend', function() {
    this.classList.remove('touch-active');
  });
  img.addEventListener('touchcancel', function() {
    this.classList.remove('touch-active');
  });
});

//EDUCATIONAL SECTION CONTENT END//

//button condition on mobile view//

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async function(e) {
    e.preventDefault(); // Prevent default form submission (no redirect)
    const data = new FormData(form);
    const action = form.action;
    try {
      const response = await fetch(action, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        document.getElementById('form-message').textContent = "Thank you! Your message has been sent.";
        alert("Thank you! Your message has been sent.");
        form.reset();
      } else {
        document.getElementById('form-message').textContent = "Oops! There was a problem submitting your form.";
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      document.getElementById('form-message').textContent = "Oops! There was a problem submitting your form.";
      alert("Oops! There was a problem submitting your form.");
    }
  });
});

//aniamted bg combinations are started here


  document.addEventListener('DOMContentLoaded', function() {
            const movingObjects = document.querySelectorAll('.moving-object');
            
            // This adds a slight "parallax" effect to the floating orbs based on mouse position
            document.addEventListener('mousemove', function(e) {
                // Calculate mouse position from -0.5 to 0.5
                const mouseX = (e.clientX / window.innerWidth) - 0.5;
                const mouseY = (e.clientY / window.innerHeight) - 0.5;
                
                movingObjects.forEach(obj => {
                    // How much the object should move. Change the '20' to make it more or less sensitive.
                    const offsetX = mouseX * 20;
                    const offsetY = mouseY * 20;
                    
                    // We need to get the current animation transform and add the mouse-based transform
                    // to avoid overriding the CSS animation. However, for simplicity and a more direct
                    // feel, we can just apply a new transform. This will slightly interrupt the
                    // base 'float' animation but creates a nice interactive effect.
                    // For a more advanced version, you would combine the transforms.
                    obj.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
                });
            });

            // This adds a subtle pulsing animation to the large glowing spots
            const glows = document.querySelectorAll('.glow');
            glows.forEach((glow, index) => {
                glow.style.animation = `pulse 8s infinite ease-in-out ${index * 2}s`;
            });
        });