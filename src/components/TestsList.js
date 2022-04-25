import styled from "styled-components"

export default function TestsList({tests}) {
    return(
        <Tests>
            <div className="terms">
                <div>{tests.number}º Período </div>
                <ion-icon name="chevron-down-outline"></ion-icon>
            </div>
            {tests.Discipline.map((discipline)=> { return <DisciplinesList discipline={discipline} /> })}
        </Tests>
    )
}

function DisciplinesList({discipline}) {
    return(
        <div>
            <div className="disciplines">
                <div>{ discipline.name }</div>
                <ion-icon name="chevron-down-outline"></ion-icon>
            </div>
            {discipline.TeacherDiscipline.map((teacher)=> { return <TeacherList teacher={teacher} /> })}
        </div>
    )
}


function TeacherList({teacher}) {
    return(
        <div>
            <div className="category">
                { teacher.Test.map((test) => {
                    if(test){
                        return test.Categorie.name
                    } 
                    return "não há testes disponíveis para essa disciplina"
                }) }
                <div className="tests">
                    {teacher.Test.map((test)=> {
                        return <a href={test.pdfUrl}>{`${test.name} (professor)`}</a>
                    })}
                </div>
            </div>
        </div>
    )
}

const Tests = styled.div`
    margin-bottom: 10px;

    .terms{
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: solid 1px #E6E6FA;
        padding: 0 20px;
        box-shadow: 0 0 1em #E6E6FA;
    }

    .disciplines{
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px 0 40px;
        background-color: #F8F8FF;
    }

    .category{
        padding: 20px 20px 20px 60px;
        background-color: #fff;
    }

    .tests{
        padding: 10px 20px 10px 20px;
        background-color: #fff;
    }

    .hidden{
        display: none;
    }
`