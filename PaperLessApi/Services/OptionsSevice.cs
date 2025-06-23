public static class OptionsService
{

    static List<string> subRaceOptions { get; }
    static string RaceDescGive { get; }

    static OptionsService()
    {
        subRaceOptions = new List<string> { };
        RaceDescGive = "";

    }


    public static List<string> sendSubrace(string race)
    {
        List<string> subrace;

        switch (race)
        {
            case "Dwarf":
                subrace = new List<string> { "Hill Dwarf", "Mountain Dwarf" };
                break;
            case "Elf":
                subrace = new List<string> { "High Elf", "Wood Elf", "Drow" };
                break;
            case "Halfling":
                subrace = new List<string> { "Lightfoot", "Stout" };
                break;
            case "Human":
                subrace = new List<string> { "Standard Human", "Variant Human" };
                break;
            case "Gnome":
                subrace = new List<string> { "Forest Gnome", "Rock Gnome" };
                break;
            default:
                subrace = new List<string> { };
                break;
        }

        return subrace;
    }

    public static string sendRaceDesc(string race, string subRace)
    {
        string raceDesc = "";

        switch (race)
        {
            case "Dwarf":
                if (subRace == "Hill Dwarf")
                {
                    raceDesc = "Hill Dwarves have keen senses, deep intuition, and remarkable resilience.";
                }
                else if (subRace == "Mountain Dwarf")
                {
                    raceDesc = "Mountain Dwarves are strong and hardy, accustomed to a difficult life in rugged terrain.";
                }
                else
                {
                    raceDesc = "Stout and solid, Dwarves are known for their craftsmanship and honor.";
                }
                break;

            case "Elf":
                if (subRace == "High Elf")
                {
                    raceDesc = "High Elves are graceful and magical, with a keen mind for arcane arts.";
                }
                else if (subRace == "Wood Elf")
                {
                    raceDesc = "Wood Elves are fleet and stealthy, deeply connected to nature.";
                }
                else if (subRace == "Drow")
                {
                    raceDesc = "Drow, or dark elves, dwell underground and are known for their cunning and shadow magic.";
                }
                else
                {
                    raceDesc = "Elves are graceful, long-lived, and attuned to magic and nature.";
                }
                break;

            case "Halfling":
                if (subRace == "Lightfoot")
                {
                    raceDesc = "Lightfoot Halflings are nimble and able to hide easily, even behind others.";
                }
                else if (subRace == "Stout")
                {
                    raceDesc = "Stout Halflings are hardy and tough, with a resistance to poison.";
                }
                else
                {
                    raceDesc = "Halflings are small, cheerful folk with big hearts and surprising bravery.";
                }
                break;

            case "Human":
                if (subRace == "Variant Human")
                {
                    raceDesc = "Variant Humans are versatile and ambitious, gaining a feat at level 1.";
                }
                else
                {
                    raceDesc = "Humans are adaptable, ambitious, and the most widespread race.";
                }
                break;

            case "Dragonborn":
                raceDesc = "Dragonborn are proud, draconic humanoids with a breath weapon and elemental ancestry.";
                break;

            case "Gnome":
                if (subRace == "Forest Gnome")
                {
                    raceDesc = "Forest Gnomes are shy and clever, with innate illusion magic.";
                }
                else if (subRace == "Rock Gnome")
                {
                    raceDesc = "Rock Gnomes are tinkerers and inventors, curious about mechanics and magic.";
                }
                else
                {
                    raceDesc = "Gnomes are energetic and eccentric, with a love of magic and mischief.";
                }
                break;

            case "Half-Elf":
                raceDesc = "Half-Elves blend the curiosity and ambition of humans with the grace of elves.";
                break;

            case "Half-Orc":
                raceDesc = "Half-Orcs are strong and fierce, born of two worlds and often seeking honor.";
                break;

            case "Tiefling":
                raceDesc = "Tieflings are touched by infernal heritage, often mistrusted but powerful and determined.";
                break;

            default:
                raceDesc = "Unknown race.";
                break;
        }

        return raceDesc;
    }

}
