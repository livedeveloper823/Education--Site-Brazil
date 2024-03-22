import React, { useEffect } from "react";
import Tabs from "./Tabs";
import "./Tab.css";
import { useSelector, useDispatch } from "../../store/index";
import {
  getSchoolRank,
  getStudentRank,
} from "../../store/reducers/rankingdata";

const Ranking = () => {
  const RankData = useSelector((state) => state.rankingdata);
  const schoolRank = RankData.schoolRankings;
  const studentRank = RankData.studentRankings;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStudentRank());
    dispatch(getSchoolRank());
  }, []);
  return (
    <div className="md:m-20 md:p-10 pt-10 bg-white rounded-xl">
      <Tabs>
        <div label="Escolas">
          <div className="md:grid grid-cols-3 gap-20 md:m-20">
            <div className="md:m-0 m-2 flex justify-around border-2 rounded-2xl items-center px-10 py-5 text-white bg-gradient-to-tr from-blue-600 via-blue-300 to-blue-600">
              <div>
                {/* <img
                  className="w-24 h-24 rounded-[50%]"
                  src={StudentAvatarImg}
                  alt=""
                /> */}
                <div className="md:text-xl font-bold">
                  {schoolRank.mathRank && schoolRank.mathRank.school}
                </div>
              </div>
              <div className="md:text-3xl text-lg font-bold">
                {schoolRank.mathRank && schoolRank.mathRank.score}
              </div>
            </div>
            <div className="md:m-0 m-2 flex justify-around border-2 rounded-2xl items-center px-10 py-5 text-white bg-gradient-to-tr from-lime-600 via-lime-300 to-lime-600">
              <div>
                {/* <img
                  className="w-24 h-24 rounded-[50%]"
                  src={StudentAvatarImg}
                  alt=""
                /> */}
                <div className="md:text-xl font-bold">
                  {schoolRank.portRank && schoolRank.portRank.school}
                </div>
              </div>
              <div className="md:text-3xl text-lg font-bold">
                {schoolRank.portRank && schoolRank.portRank.score}
              </div>
            </div>
            <div className="md:m-0 m-2 flex justify-around border-2 rounded-2xl items-center px-10 py-5 text-white bg-gradient-to-tr from-red-600 via-red-300 to-red-600">
              <div>
                {/* <img
                  className="w-24 h-24 rounded-[50%]"
                  src={StudentAvatarImg}
                  alt=""
                /> */}
                <div className="md:text-xl font-bold">
                  {schoolRank.total && schoolRank.total[0].school}
                </div>
              </div>
              <div className="md:text-3xl text-lg font-bold">
                {schoolRank.total && schoolRank.total[0].score}
              </div>
            </div>
          </div>
          <div className="flex justify-around p-5 md:text-2xl font-bold">
            <div>Classificação</div>
            <div>Escolas Nome</div>
            <div>Pontuação</div>
          </div>
          <div>
            {schoolRank.total &&
              schoolRank.total.map((item, index) => (
                <div className="flex justify-around">
                  <div>{index + 1}</div>
                  <div>{item.school}</div>
                  <div>{item.score}</div>
                </div>
              ))}
          </div>
        </div>
        <div label="Alunos de minha escola">
          <div className="md:grid grid-cols-3 gap-20 md:m-20">
            <div className="md:m-0 m-2 flex justify-around border-2 rounded-2xl items-center px-10 py-5 text-white bg-gradient-to-tr from-blue-600 via-blue-300 to-blue-600">
              <div>
                <img
                  className="w-24 h-24 rounded-[50%]"
                  src={studentRank.mathRank && studentRank.mathRank.avatar}
                  alt=""
                />
                <div className="md:text-xl font-bold">{studentRank.mathRank && studentRank.mathRank.student}</div>
              </div>
              <div className="md:text-3xl text-lg font-bold">{studentRank.mathRank && studentRank.mathRank.score}</div>
            </div>
            <div className="md:m-0 m-2 flex justify-around border-2 rounded-2xl items-center px-10 py-5 text-white bg-gradient-to-tr from-lime-600 via-lime-300 to-lime-600">
              <div>
                <img
                  className="w-24 h-24 rounded-[50%]"
                  src={studentRank.portRank && studentRank.portRank.avatar}
                  alt=""
                />
                <div className="md:text-xl font-bold">{studentRank.portRank && studentRank.portRank.student}</div>
              </div>
              <div className="md:text-3xl text-lg font-bold">{studentRank.portRank && studentRank.portRank.score}</div>
            </div>
            <div className="md:m-0 m-2 flex justify-around border-2 rounded-2xl items-center px-10 py-5 text-white bg-gradient-to-tr from-red-600 via-red-300 to-red-600">
              <div>
                <img
                  className="w-24 h-24 rounded-[50%]"
                  src={studentRank.total && studentRank.total[0].avatar}
                  alt=""
                />
                <div className="md:text-xl font-bold">{studentRank.total && studentRank.total[0].student}</div>
              </div>
              <div className="md:text-3xl text-lg font-bold">{studentRank.total && studentRank.total[0].score}</div>
            </div>
          </div>
          <div className="grid grid-cols-4 text-center md:text-xl font-bold">
            <div>Classificação</div>
            <div>Nome</div>
            <div>Nível</div>
            <div>Pontuação</div>
          </div>
          <div>
            {studentRank.total &&
              studentRank.total.map((item, index) => (
                <div className="grid grid-cols-4 text-center">
                  <div>{index+1}</div>
                  <div>{item.student}</div>
                  <div>{item.level}</div>
                  <div>{item.score}</div>
                </div>
              ))}
          </div>
        </div>
      </Tabs>
    </div>
  );
};
export default Ranking;
