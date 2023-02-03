import React from "react";
import { Link } from "react-router-dom";

export default function SeaFood() {
  return (
    <div>
      <div className="food-container">
        <div className="food-nav">
          <h1>Home Page</h1>
          <Link className="link " to="/">
            Home Page{" "}
          </Link>
        </div>
        <div className="food-table">
          <h1 className="food-title">Welcome to SeaFood Page. </h1>
          <h1>
            Bài 3: Tạo ra các trang HTML thể hiện bảng như các hình dưới đây:
          </h1>
          <table border="1" cellpadding="0">
            <tr>
              <td>
                This is a paragraph <br />
                This is another paragraph
              </td>
              <td>
                <p>This cell contains a table:</p>
                <table border="1" cellpadding="2">
                  <tr>
                    <td>A</td>
                    <td>B</td>
                  </tr>
                  <tr>
                    <td>C</td>
                    <td>D</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <p>This cell contains a list</p>
                <ul type="disc">
                  <li>apples</li>
                  <li>bananas</li>
                  <li>Pineapples</li>
                </ul>
              </td>
              <td>HELLO</td>
            </tr>
          </table>
          <h2>Cell that spans two colums:</h2>
          <table border="1">
            <thead>
              {" "}
              <tr>
                <th>Name</th>
                <th colspan="2">Telephone</th>
              </tr>
            </thead>
            <tfoot>
              {" "}
              <tr>
                <td>Bill Gates</td>
                <td>555 77 854</td>
                <td>555 77 855</td>
              </tr>
            </tfoot>
          </table>

          <h2>Cell that spans two row:</h2>
          <table border="1">
            <tr>
              <th>First Name:</th>
              <td>Bill Gates</td>
            </tr>
            <tr>
              <th rowspan="2">Telephone:</th>
              <td>555 77 854</td>
            </tr>
            <tr>
              <td>555 77 855</td>
            </tr>
          </table>
          <h2>Table headers:</h2>
          <table border="1">
            <thead>
              <tr>
                <th>Name</th>
                <th>Telephone</th>
                <th>Telephone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bill Gates</td>
                <td>555 77 854</td>
                <td>555 77 855</td>
              </tr>
            </tbody>
          </table>
          <h2>Vertical header:</h2>
          <table border="1">
            <tr>
              <th>First Name:</th>
              <td>Bull Gates</td>
            </tr>
            <tr>
              <th>Telephone:</th>
              <td>555 77 854</td>
            </tr>
            <tr>
              <th>Telephone:</th>
              <td>555 77 855</td>
            </tr>
          </table>
        </div>
        <div>
          <p className="about-end"> Hết òiiiii ...</p>
          <Link className="link link-footer" to="/">
            Về Home Page đi người anh em =)){" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
