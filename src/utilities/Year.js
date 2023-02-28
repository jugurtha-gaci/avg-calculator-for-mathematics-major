import Module from "../classes/Module"
import UE from "../classes/UE"

export default (s1, s2) => {

    // ---------------------------------------------- Program S1 ----------------------------------------------    
    const UEFondamentale = new UE("Unité Fondamentale 1")
    for(const module of s1.filter(mod => mod.unite.toLowerCase() == 'fondamentale 1'))
        UEFondamentale.addModule(new Module(module))

    const UEFondamentale2 = new UE("Unité Fondamentale 2")
    for(const module of s1.filter(mod => mod.unite.toLowerCase() == 'fondamentale 2'))
        UEFondamentale2.addModule(new Module(module))

    const UEMethodologie = new UE("Unité de Méthodologie")
    for(const module of s1.filter(mod => mod.unite.toLowerCase() == 'méthodologie'))
        UEMethodologie.addModule(new Module(module))


    const UEDecouverte = new UE("Découverte")
    for(const module of s1.filter(mod => mod.unite.toLowerCase() == 'découverte'))
        UEDecouverte.addModule(new Module(module))


    const UETransversale = new UE("Transversale")
    for(const module of s1.filter(mod => mod.unite.toLowerCase() == 'transversale'))
        UETransversale.addModule(new Module(module))

    const program_s1 = [
        UEFondamentale,
        UEFondamentale2,
        UEMethodologie,
        UETransversale,
        UEDecouverte
    ]



    // ---------------------------------------------- Program S2 ----------------------------------------------
    const UEFondamentale_S2 = new UE("Unité Fondamentale 1")
    for(const module of s2.filter(mod => mod.unite.toLowerCase() == 'fondamentale 1'))
        UEFondamentale_S2.addModule(new Module(module))

    const UEFondamentale2_S2 = new UE("Unité Fondamentale 2")
    for(const module of s2.filter(mod => mod.unite.toLowerCase() == 'fondamentale 2'))
        UEFondamentale2_S2.addModule(new Module(module))

    const UEMethodologie_S2 = new UE("Unité de Méthodologie")
    for(const module of s2.filter(mod => mod.unite.toLowerCase() == 'méthodologie'))
        UEMethodologie_S2.addModule(new Module(module))

    const UEDecouverte_S2 = new UE("Découverte")
    for(const module of s2.filter(mod => mod.unite.toLowerCase() == 'découverte'))
        UEDecouverte_S2.addModule(new Module(module))

    const UETransversale_S2 = new UE("Transversale")
    for(const module of s2.filter(mod => mod.unite.toLowerCase() == 'transversale'))
        UETransversale_S2.addModule(new Module(module))

    const program_s2 = [
        UEFondamentale_S2,
        UEFondamentale2_S2,
        UEMethodologie_S2,
        UEDecouverte_S2,
        UETransversale_S2
    ]


    return {
        program_s1,
        program_s2
    }
}