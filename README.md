<a name="readme-top"></a>

<h3 align="center">Record Reserve</h3>

  <p align="center">
    Record Reserve is an album collection site that allows users to keep track of their music album collection.
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![product-screenshot]](https://example.com) -->
[![product-screenshot]](https://record-reserve-f9783.web.app)

For the music communities that enjoy collecting physical music medium, such as the Kpop and vinyl spaces, keeping track of all the product you own can get confusing.
Record Reserve serves as a place to help users keep track of the music they've purchased, using Last.FM's album search API endpoint to easily find music albums.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

Utilizing React on the front end with vite tooling.

* [![React][React.js]][React-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This project uses npm to download dependencies.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Create a free API account at [https://www.last.fm/api/account/create](https://www.last.fm/api/account/create)
2. Clone the repo
   ```sh
   git clone https://github.com/CountyClerks/Record-Reserve.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in an environment file `.env.local`
   ```js
   const VITE_LASTFM_API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Search for an album of your choice through the 'Search Album' page.
[![product-search]](https://record-reserve-f9783.web.app/new-album)

Add your selected album using the 'Add Album" button, and see your album collection on the home page.
[![product-screenshot]](https://record-reserve-f9783.web.app)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Add Profile Page
    - [ ] Implement Chart.js to display album data in profile

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Eric Hardy - [Linkedin](https://www.linkedin.com/in/erichardy011/) - erichardy011@gmail.com

Project Link: [https://github.com/CountyClerks/Record-Reserve](https://github.com/CountyClerks/Record-Reserve)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Last.FM API](https://www.last.fm/api)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: /src/images/recordreserve.PNG
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[product-medium]: /src/images/record_medium.PNG
[product-small]: /src/images/record_small.PNG
[product-search]: /src/images//record_search.PNG