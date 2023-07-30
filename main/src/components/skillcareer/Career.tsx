export default function Career() {
  const careerArr = [
    {
      company: "메이데이 파트너스",
      period: "플랫폼개발팀 (2022.05 - 현재)",
      desc: "- 가상 이벤트 솔루션/ 온라인마케팅 / 프로모션 / 멀티미디어 제작 회사",
    },
    {
      company: "필드쉐어",
      period: "개발팀 (2022.04 - 2022.04)",
      desc: "- 스마트 스포츠 시설, 레슨 검색 및 예약/결제 서비스 스타트업",
    },
    {
      company: "걸프에어",
      period: "항공 승무원 (2019.06 - 2020.11)",
      desc: "",
    },
  ];

  return (
    <article className="w-[100%] flex flex-col items-center">
      <h2 className="text-[45px] text-[#000] font-[700] mb-[10px]">CAREER</h2>
      <div className="w-[150px] h-[1px] bg-[#000] mb-[40px]" />
      <div className="w-[100%] flex flex-col items-center rounded-[10px] p-[25px] bg-[#fff]">
        {careerArr.map(
          (el: { company: string; period: string; desc: string }, i) => (
            <div key={i} className="w-[90%]">
              <div>
                <h3 className="text-[20px] font-[600] mb-[15px]">
                  {el.company}
                </h3>
                <p className="text-[#393939] mb-[15px]">{el.period}</p>
                {el.desc && <p>{el.desc}</p>}
              </div>
              {i !== 2 && (
                <div className="w-[100%] h-[1px] bg-[#9a9a9a] my-[15px]" />
              )}
            </div>
          )
        )}
      </div>
    </article>
  );
}
