import "./Footer.css";

function footer() {
    return (
        <nav className="footer navbar fixed-bottom ">
            <div className="container-fluid">
                <span>BananaCraft Spec. 2024</span>
                <a href={"https://github.com/Romanviann/BananaCraft-Spec"} target={"_blank"}><img src={"./src/assets/images/icons8-github-30.svg"}/></a>
                <a className="link navbar-brand" target={"_blank"} href="https://medium.com/@liamfoley2430/on-the-usefulness-of-bananas-a-new-system-of-measurement-76c50d8bb89a">🍌 Banana Standard (BS)</a>
            </div>
        </nav>
    );
}

export default footer;