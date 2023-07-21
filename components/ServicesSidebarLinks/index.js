import Link from "next/link";
import React from "react";

export const ServicesSidebarLinks = () => {
  return (
    <>
      <aside
        className="side-nav v1 light-bg border-radius-item box-shadow el-tab-box"
        id="SideNavV1"
        data-onvisible="show"
        data-slider="true"
        data-closing="false"
      >
        <nav>
          <header className="text-left">
            <h5>Conditions We Treat</h5>
          </header>
          <ul className="" data-role="panel">
            <li className="level-1 selected ">
              <Link
                className="auto"
                href="/conditions-we-treat/car-accident-injury"
                target=""
              >
                Car Accident Injury
              </Link>
            </li>
            <li className="level-1  ">
              <Link
                className="auto"
                href="/conditions-we-treat/sports-injury"
                target=""
              >
                Sports Injury
              </Link>
            </li>
            <li className="level-1  ">
              <Link
                className="auto"
                href="/conditions-we-treat/back-pain"
                target=""
              >
                Back Pain
              </Link>
            </li>
            <li className="level-1  ">
              <Link
                className="auto"
                href="/conditions-we-treat/knee-pain"
                target=""
              >
                Knee Pain
              </Link>
            </li>
            <li className="level-1  ">
              <Link
                className="auto"
                href="/conditions-we-treat/headaches"
                target=""
              >
                Headaches
              </Link>
            </li>
            <li className="level-1  ">
              <Link
                className="auto"
                href="/conditions-we-treat/neck-pain"
                target=""
              >
                Neck Pain
              </Link>
            </li>
            <li className="level-1  ">
              <Link
                className="auto"
                href="/conditions-we-treat/joint-pain"
                target=""
              >
                Joint Pain
              </Link>
            </li>
            <li className="level-1  ">
              <Link
                className="auto"
                href="/conditions-we-treat/leg-pain"
                target=""
              >
                Leg Pain
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};
