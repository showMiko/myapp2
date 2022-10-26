export default function AboutPage()
{
    return(
        <>
            <div className="container" >
                <div class="accordion" id="accordionExample" >
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                               <h2>About TextUtils
                                </h2> 
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            <h3>This is a Text Util App made By soumik Samanta. This is My First React app for understanding the basic fundamentals of React JS.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}