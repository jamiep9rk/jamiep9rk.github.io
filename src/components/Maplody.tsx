import React from "react";
import maplody from "../img/maplody-landing.png";

function Maplody() {
    return (
        <div className="projects-container">
            <nav className="project-white-container">
                <div className="project-name">Maplody</div>
                <div className="project-team">Front-end 2명 / Back-end 2명</div>
                <div className="projects-term">2021.11 - 2021.11 (2주)</div>
                <nav className="project-info-container">
                    <img className="project-landing-image" src={maplody} alt="" />
                    <div className="project-details-container">
                        <nav className="details-title">🎵 추억이 있는 음악을 들었던 장소와 함께 기록하는 앱, Maplody 입니다</nav>
                        <ul>원하는 장소에 음악과 사연을 저장할 수 있어요</ul>
                        <ul>사이드바에서 내가 저장한 음악과 사연을 모아볼 수 있어요</ul>
                        <ul>기록한 핀을 지도에서 한 눈에 볼 수 있어요</ul>
                        <ul>저장해놓은 음악을 유튜브 영상으로 감상할 수 있어요</ul>
                        <nav className="details-title">✏️ 주요 기능 구현</nav>
                        <ul>프로젝트 기획 및 진행 상황 관리, 팀원들 간 소통 관리</ul>
                        <ul>Youtube API를 이용해 검색을 통한 유튜브 비디오 불러오기 구현</ul>
                        <ul>Google Maps API를 이용한 지도 및 인포 윈도우, 마커 좌표 구현</ul>
                    </div>
                </nav>
            </nav>
        </div>
    );
}

export default Maplody;
