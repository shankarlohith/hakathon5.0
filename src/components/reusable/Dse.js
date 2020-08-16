import React from 'react'

export default function Dse() {
    return (
        <div className="container">
            <div class="accordion" id="accordionExample">
            <div class="card">
                <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    BSE
                    </button>
                </h2>
                </div>

                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div className="row">
                    <div className="col">
                        <div class="card-body">
                        <h2>NIFTY 50</h2>
                        <h1>11,256.00</h1>
                        <h1><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M3.204 11L8 5.519 12.796 11H3.204zm-.753-.659l4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/>
</svg> 23.40 (0.21%)</h1>
<p>As on 14 Aug 2020 10:46</p>
                        </div>
                        </div>

                        <div className="col">
                        <div class="card-body">
                        <p>Day Range</p>
                        <div class="d-flex justify-content-center my-4">
                            <span class="font-weight-bold blue-text mr-2 mt-1">0</span>
                            <form class="range-field w-50">
                                <input class="border-0" type="range" min="0" max="100" />
                            </form>
                            <span class="font-weight-bold blue-text ml-2 mt-1">100</span>
                            </div>
                            <p>Day Range</p>
                        <div class="d-flex justify-content-center my-4">
                            <span class="font-weight-bold blue-text mr-2 mt-1">0</span>
                            <form class="range-field w-50">
                                <input class="border-0" type="range" min="0" max="100" />
                            </form>
                            <span class="font-weight-bold blue-text ml-2 mt-1">100</span>
                            </div>
                        </div>
                        </div>

                    </div>


                    <table class="table">
            <thead>
                <tr>
                <th scope="col">Over View</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">Open</th>
                <td>22.333.00</td>
                <td scope="row">Day Low</td>
                <td>22.553.0</td>
                </tr>
                <tr>
                <th scope="row">Previous Close</th>
                <td>11.2256</td>
                <td>Week High</td>
                <td>555146.2</td>
                </tr>
                <tr>
                <th scope="row">Day High</th>
                <td>568.2565</td>
                <td>Week Low</td>
                <td>615.584</td>
                </tr>
            </tbody>
            </table>


                </div>
            </div>




            </div>
        
       
        </div>
    
    )
}
