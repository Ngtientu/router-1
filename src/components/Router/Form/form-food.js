import React, { Component } from "react";
import { Formik } from "formik";

class FormFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div className="container-form">
            <Formik>

                <form action="">
                <table>
                <fieldset>
                    <legend><samp>Personal Information</samp></legend>
                    {/* <!--Name: --> */}
                    <label for="lname"><samp>Last Name:</samp></label>
                    <input type="text" name="txtlname" id="lastname" placeholder="Ho Va">
                   <label for="fname"><samp>First Name:</samp></label>
                   <input type="text" name="txtfname" id="fristname" placeholder="Ten"> <br> <br>
                {/* <!-- male or female --> */}
                    <label for="male"></label>
                    <input type="radio" name="txtmale" id="male"><samp>Male</samp> 
                    <label for="female"></label>
                    <input type="radio" name="txtfemale" id="female"><samp>Female</samp> <br>
                    {/* <!-- Address: --> */}
                    <p><samp>Address:</samp></p>
                    <label for="address"><samp></samp></label>
                    <textarea name="txtaddress" id="address" cols="30" rows="7" placeholder="somewhere in Hanoi"></textarea>
               </fieldset>
                <fieldset>
                    <p><samp>Magazines subscription for</samp></p>
                    <samp>
                    <input type="checkbox" name="txttime" id="time" checked>Time   
                    <input type="checkbox" name="txtnewsweek" id="newsweek" checked>Newsweek 
                    <input type="checkbox" name="txtsunday" id="sunday">Sunday 
                    <input type="checkbox" name="txtvogue" id="vogue">Vogue
                    <input type="checkbox" name="txtpeople" id="people" checked>People </samp>
                </fieldset>
                <fieldset>
                    <legend><samp>Duration</samp></legend>
                    <samp>
                    <label for="duration"></label>
                    <input type="radio" name="txtduration" id="1year">1 Year 
                    <input type="radio" name="txtduration" id="3years">3 Years 
                    <input type="radio" name="txtduration" id="5years">5 Years  </samp>
                </fieldset>

                <fieldset> 
                    <legend><samp>Payment options</samp></legend> <samp>
                    <label for="payment"></label>
                    <input type="radio" name="txtpayment" id="demand dradt" >Demand Draft  
                    <input type="radio" name="txtpayment" id="credit card"checked>Credit Card </samp>
                </fieldset>
                <tr><td>
                        <button>Process</button>
                    <input type="reset" name="txtrst" id="Reset">
                </td> </tr>
            </table>
                </form>
            </Formik>
        </div>
    );
  }
}


export default FormFood;
