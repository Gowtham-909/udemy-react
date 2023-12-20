import c1 from "../assets/images/c1.jpg"
import c2 from "../assets/images/c2.jpg"
import c3 from "../assets/images/c3.jpg"
import c4 from "../assets/images/c4.jpg"


function Popular() {
    return (
        <div class="popular">
            <h1 class="popular__title"> Most Popular</h1>
            <p class="popular__subtitle"> Pic the best fit</p>
            <div class="popular__container">
                <div class="course-card">
                    <img src={c1} alt="c1"></img>
                        <h3>2023 Python Data visuvalisation masterclass</h3>
                        <p>col steele</p>
                        <p>4.9 ⭐⭐⭐⭐</p>
                        <p>₹449 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={c2} alt="c2"></img>
                        <h3>Web Development Bootcamp 2023</h3>
                        <p>col steele</p>
                        <p>3.9 ⭐⭐⭐</p>
                        <p>₹449 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={c3} alt="c3"></img>
                        <h3>Master UI/UX Design with Figma</h3>
                        <p>col steele</p>
                        <p>4.9 ⭐⭐⭐⭐</p>
                        <p>₹449 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={c4} alt="c4"></img>
                        <h3>Basic to Advance Java Core Training</h3>
                        <p>col steele</p>
                        <p>4.9 ⭐⭐⭐⭐</p>
                        <p>₹449 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={c4} alt="c4"></img>
                        <h3>Basic to Advance Java Core Training</h3>
                        <p>col steele</p>
                        <p>4.9 ⭐⭐⭐⭐</p>
                        <p>₹449 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={c3} alt="c3"></img>
                        <h3>Master UI/UX Design with Figma</h3>
                        <p>col steele</p>
                        <p>4.9 ⭐⭐⭐⭐</p>
                        <p>₹449 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={c1} alt="c1"></img>
                        <h3>2023 Python Data visuvalisation masterclass</h3>
                        <p>col steele</p>
                        <p>4.9 ⭐⭐⭐⭐</p>
                        <p>₹449 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={c2} alt="c2"></img>
                        <h3>Web Development Bootcamp 2023</h3>
                        <p>col steele</p>
                        <p>3.9 ⭐⭐⭐</p>
                        <p>₹449 <del>1999</del></p>
                </div>

            </div>
        </div>

    )
}

export default Popular