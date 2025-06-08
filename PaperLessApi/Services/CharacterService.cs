public static class CharacterService
{

    static List<Character> Characters { get; }
    static int nextId = 2;
    static CharacterService()
    {

        Characters = new List<Character>{

      new Character {Id = 1, playerName = "Bongy", name = "Binbongy", race = "Elf", subRace = "Wood Elf", raceDesc = "Cutie patootie loves animals", charClass = "Mage",
                    healthBar =  23, wealth = 1004, level = 13}
        };
    }

    public static List<Character> GetAll() => Characters;

    public static Character? Get(int Id) => Characters.FirstOrDefault(p => p.Id == Id);

    public static void Add(Character character)
    {

        character.Id = nextId++;
        Characters.Add(character);

    }

    public static void Delete(int Id)
    {
        var character = Get(Id);
        if (character is null)
            return;

        Characters.Remove(character);
    }

    public static void Update(Character character)
    {

        var index = Characters.FindIndex(p => p.Id == character.Id);
        if (index == -1)
            return;

        Characters[index] = character;

    }

}
