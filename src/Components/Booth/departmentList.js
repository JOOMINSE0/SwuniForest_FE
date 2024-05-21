import { useState } from "react";
import "./departmentList.css"
function DepartmentList() {
    const [day, setDay] = useState(0);
    const content = [
        {
            day: "5/22(수)", booths:
                [{ name: "총학생회 부스", numbers: "1 2 3 4" },
                { name: "동아리연합회", numbers: "5 6 7 8" },
                { name: "인문대학", numbers: "9 10 11 12 13 14" },
                { name: "과학기술융합대학", numbers: "15 16 17 18 19" },
                { name: "자율전공학부", numbers: "20 21" },
                { name: "교내 부서 부스", numbers: "22 23" },
                { name: "미래산업융합대학", numbers: "24 25 26 27 28" },
                ]
        },
        {
            day: "5/23(목)", booths:
                [{ name: "총학생회 부스", numbers: "1 2 3 4" },
                { name: "동아리연합회", numbers: "5 6 7 8" },
                { name: "아트앤디자인스쿨", numbers: "9 10 11 12" },
                { name: "사회과학대학", numbers: "13 14 15 16 17" },
                { name: "기업 및 단체 부스", numbers: "18 19" },
                { name: "자율전공학부", numbers: "20 21" },
                { name: "교내 부서 부스", numbers: "22 23" },
                { name: "미래산업융합대학", numbers: "24 25 26 27 28" },
                ]
        },
        {
            day: "5/24(금)", booths: [
                { name: "총학생회 부스", numbers: "1 2 3 4" },
                { name: "동아리연합회", numbers: "5 6 7 8" },
                { name: "사회과학대학", numbers: "13 14 15 16 17" },
                { name: "아트앤디자인스쿨", numbers: "9 10 11 12" },
                { name: "인문대학", numbers: "18 23" },
                { name: "과학기술융합대학", numbers: "24 25 26 27 28" },


            ]
        }
    ];

    return (
        <div>
            <p className="depart-title">부스 정보</p>
            <div className="date-buttons">
                {content.map((item, index) => (
                    <button key={index}
                        onClick={() => setDay(index)}
                        className={day === index ? 'selected' : ''}
                    >
                        {item.day}
                    </button>
                ))}
            </div>
            <TabContent booths={content[day].booths} />
        </div>
    );
}


function TabContent({ booths }) {
    return (
        <div className="tap-container">
            {booths.map((booth, index) => (
                <div className="booth-item" key={index}>
                    <p style={{ color: "#5A776D", fontWeight: "700" }}>{booth.name} </p>
                    <p style={{ color: "#9D9FA4" }}>{booth.numbers}</p>
                </div>
            ))}
        </div>
    );
}


export default DepartmentList;
