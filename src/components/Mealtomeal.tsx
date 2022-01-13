import React from "react";
import mealtomeal from "../img/meal-to-meal-landing.png";

function Mealtomeal() {
    return (
        <div className="projects-container">
            <nav className="projects-title">Projects</nav>
            <hr className="projects-bar" />
            <nav className="project-white-container">
                <div className="project-name">Meal-To-Meal</div>
                <div className="project-team">Front-end 2명 / Back-end 2명</div>
                <div className="projects-term">2021.11 - 2021.12 (4주)</div>
                <nav className="project-info-container">
                    <img className="project-landing-image" src={mealtomeal} alt="" />
                    <div className="project-details-container">
                        <nav className="details-title">🍔 내가 먹은 맛있는 한 끼를 다른 사람에게 기부할 수 있는 플랫폼 입니다</nav>
                        <ul>누군가가 한 끼를 먹을 수 있도록 기부할 수 있어요</ul>
                        <ul>누구든지 다른 사람이 기부한 음식으로 끼니를 챙길 수 있어요</ul>
                        <ul>한 끼를 대접받고 리뷰를 통해서 감사한 마음을 표현할 수 있어요</ul>
                        <ul>음식점 사장님들은 손님들이 남긴 리뷰로 맛집임을 증명 할 수 있어요</ul>
                        <nav className="details-title">✏️ 주요 기능 구현</nav>
                        <ul>프로젝트 SR 기획 및 진행 상황 관리, 팀원들 간 소통 관리</ul>
                        <ul>SR 및 회고 문서 작성 및 코드 리뷰 진행</ul>
                        <ul>Google Maps API를 이용한 지도 및 인포 윈도우, 검색창 구현</ul>
                        <ul>S3를 활용한 이미지 업로드 구현</ul>
                        <ul>카카오 로그인 API를 이용한 토큰 기반 소셜 로그인 구현</ul>
                    </div>
                </nav>
            </nav>
        </div>
    );
}

export default Mealtomeal;
