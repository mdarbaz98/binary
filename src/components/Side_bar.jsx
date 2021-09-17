import React from "react";
import './Side_bar.css';

function Sidebar(){
    return <div className="side_bar">

            <div className="menus hide follow ">
            <div className="items">
            <img src="https://mir-s3-cdn-cf.behance.net/user/100/767f81547058309.5eb1818f9f776.png" />
            <img src="https://mir-s3-cdn-cf.behance.net/user/100/0fa67613012973.5f465459eb4de.jpg" />
            <img src="https://mir-s3-cdn-cf.behance.net/user/100/314480121435053.605463679cfd6.jpg" />
            <img src="https://mir-s3-cdn-cf.behance.net/user/100/f96971857164695.601913b475d41.png" />
            </div>
            <button className="plus"><i class="fas fa-plus"></i></button>
            <p>Follow</p>
            </div>

            <div className="menus hide">
            <div className="items tools">
            <img src="https://a5.behance.net/42a83dc3ca53666568b04771337d2ca1370ea255/img/project/tools/photoshop.svg?cb=264615658" />
            </div>
            <p>Tools</p>
            </div>

            <div className="menus hide">
            <div className="items fl">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-fill" viewBox="0 0 16 16">
  <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
</svg>
            </div>
            <p>Save</p>
            </div>

            <div className="menus like_div">
            <div className="items like">
            <i class="fas fa-thumbs-up"></i>
            </div>
            <p>Appreciate</p>
            </div>

    </div>
}

export default Sidebar;