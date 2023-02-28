export default (s1, s2) => {

    let S1TotalCoef = 0, S2TotalCoef = 0
    let S1TotalCredits = 0, S2TotalCredits = 0

    s1.map(unite => {
        S1TotalCoef += unite.totalCoef
        S1TotalCredits += unite.totalCredits
    })
    s2.map(unite => {
        S2TotalCoef += unite.totalCoef
        S2TotalCredits += unite.totalCredits

    }) 


    const S1 = () => {
        let avg1 = 0
        let credits1 = 0
        for(const unite of s1) {
            unite.calculateUEAvg()
            avg1 += unite.avg * unite.totalCoef
            credits1 += unite.creditsObtenu
        }
        avg1 /= S1TotalCoef
        credits1 = (avg1 >= 10) ? S1TotalCredits : credits1
        return {
            avg1,
            credits1
        }
    }


    const S2 = () => {
        let avg2 = 0
        let credits2 = 0
        for(const unite of s2) {
            unite.calculateUEAvg()
            avg2 += unite.avg * unite.totalCoef
            credits2 += unite.creditsObtenu
        }
        avg2 /= S2TotalCoef
        credits2 = (avg2 >= 10) ? S2TotalCredits : credits2

        return {
            avg2,
            credits2
        }
    }


    const Annee = () => {
        let { avg1 } = S1()
        let { credits1 } = S1()

        let { avg2 } = S2()
        let { credits2 } = S2()

        let avg = (avg1 + avg2) / 2,
            credits = (avg >= 10) ? (S1TotalCredits + S2TotalCredits) : (credits1 + credits2)

        let status = ""
        if(credits == 60 || avg >= 10) 
            status = "Admis" 
        else if(credits >= 45) 
            status = "Admis avec dettes" 
        else 
            status = "Ajourné" 

        return {
            avg, 
            credits,
            status
        }
    }

    return {
        S1,
        S2,
        Annee 
    }
}
