import React from "react";
import CommonLayout from "../layout/CommonLayout";
import Title from "../../components/common/widgets/Title";
import style from "./LeaderboardPage.module.css";

const LeaderboardPage: React.FC = () => {
    const data = [
        { rank: 1, name: "John", score: 95 },
        { rank: 2, name: "Jane", score: 90 },
        { rank: 3, name: "Alice", score: 85 },
        { rank: 4, name: "Bob", score: 80 },
        { rank: 5, name: "Eve", score: 75 },
        { rank: 6, name: "John", score: 95 },
        { rank: 7, name: "Jane", score: 90 },
        { rank: 8, name: "Alice", score: 85 },
        { rank: 9, name: "Bob", score: 80 },
        { rank: 10, name: "Eve", score: 75 },
        { rank: 11, name: "John", score: 95 },
        { rank: 12, name: "Jane", score: 90 },
        { rank: 13, name: "Alice", score: 85 },
        { rank: 14, name: "Bob", score: 80 },
        { rank: 15, name: "Eve", score: 75 },
    ];

    return (
        <CommonLayout>
            <Title title="LEADERBOARD" />
            <table className={style.table}>
                <thead className={style.thead}>
                    <tr className={style.tr}>
                        <th className={style.th}></th>
                        <th className={style.th}>Name</th>
                        <th className={style.th}>Score</th>
                    </tr>
                </thead>
                <tbody className={style.tbody}>
                    {data.map((item, index) => (
                        <tr key={index} className={style.tr}>
                            <td className={style.td}>{item.rank}</td>
                            <td className={style.td}>{item.name}</td>
                            <td className={style.td}>{item.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </CommonLayout>
    );
};

export default LeaderboardPage;
