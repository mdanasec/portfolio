import Nav from "./Nav"
import Footer from "./Footer"

import style from "./myntraCloneProject.module.css"

const MyntraColoneProject = () => {

    return (

        <section id={style.heder}>
            <div><Nav /></div>
            <article id={style.EMPContainer}>

                <div>
                    <article>
                        <h1>Myntra Clone</h1>
                        <h1>Description:</h1>
                        <div>In my journey as a web developer, I embarked on an exciting project to create a clone of the popular online fashion marketplace, Myntra. Leveraging my skills in HTML, CSS, and JavaScript, I crafted a feature-rich and visually appealing web application that replicates the core functionalities of Myntra.</div>

                        <h1>Technologies Used:</h1>
                        <div><h3>HTML (Hypertext Markup Language): </h3> I utilized HTML to structure the content of the web application. This included creating the layout, defining elements, and ensuring a semantic and accessible structure.</div>

                        <div> <h3>CSS (Cascading Style Sheets): </h3>CSS played a pivotal role in bringing the Myntra Clone to life. I meticulously designed the user interface, applied responsive design principles for various screen sizes, and utilized CSS animations to enhance the overall user experience.</div>

                        <div><h3>JavaScript:</h3>JavaScript was instrumental in adding interactivity and dynamic functionality to the Myntra Clone. I implemented features such as product filtering, sorting, and a shopping cart system. Additionally, I integrated AJAX for seamless product loading and real-time updates.</div>

                        <h1>Key Features:</h1>
                        <div><h3>Responsive Design:</h3>The website is optimized for different screen sizes, ensuring a seamless experience on desktops, tablets, and smartphones.</div>

                        <div><h3>Product Catalog:</h3> The Myntra Clone project includes a comprehensive product catalog with various categories, enabling users to browse and search for their favorite fashion items.</div>


                        <div><h3>Shopping Cart:</h3>A dynamic shopping cart system allows users to add and remove items easily. The cart updates in real-time, showing the total cost and item count.</div>

                        <h1>Benefits:</h1>
                        <div><h3>Skill Showcase:</h3>This project demonstrates my proficiency in front-end web development, including HTML, CSS, and JavaScript, which are essential skills in the field.</div>

                        <div><h3>Interactivity:</h3>The integration of JavaScript adds interactivity to the site, making it engaging and functional for users.</div>
                        <div><h3>Note:</h3>my Myntra Clone project is a testament to my web development skills and demonstrates my ability to create a feature-rich e-commerce website using HTML, CSS, and JavaScript. It offers a responsive design, user authentication, and a seamless shopping experience, making it a valuable addition to my portfolio.</div>

                    </article>
                </div>
            </article>
            <Footer/>
        </section>
    )
}
export default MyntraColoneProject