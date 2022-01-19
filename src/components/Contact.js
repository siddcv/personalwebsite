// JavaScript source code
import React from "react";
import '../css/Contact.css';
import mail from '../images/mail.jpg'

function Contacts() {
    return (
        <div>
            <div class="flex1">
                <div>
                    <img class="logos" src={mail} />
                </div>
                <div>
                    venkatesh.sidd@gmail.com
                </div>
            </div>
        </div>

           );

}
export default Contacts