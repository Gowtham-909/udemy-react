import c1 from "../assets/images/c1.jpg"
import c2 from "../assets/images/c2.jpg"
import c3 from "../assets/images/c3.jpg"
import c4 from "../assets/images/c4.jpg"


function Recomended()
{
    return(
        <div class="recomended">
        <h1 class="recomended__title">Recomended for you</h1>
        <p>pick me best fit</p>
        <div class="recomended__container">
            <div class="course-card">
                <img src={c1}></img>
                <h3>2023 Python Data visuvalisation masterclass</h3>
                <p>col steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>₹449 <del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={c2}></img>
                <h3>Web Development Bootcamp 2023</h3>
                <p>col steele</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>₹449 <del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={c3}></img>
                <h3>Master UI/UX Design with Figma</h3>
                <p>col steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>₹449 <del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={c4}></img>
                <h3>Basic to Advance Java Core Training</h3>
                <p>col steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>₹449 <del>1999</del></p>
            </div>

        </div>

    </div>
    )
}

export default Recomended