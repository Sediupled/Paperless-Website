import './Traits.css';
import { useEffect, useState } from 'react';

function Traits() {
  const [raceOptions, setRaceOptions] = useState([]);
  const [classOptions, setClassOptions] = useState([]);
  const [subRaceOptions, setSubRaceOptions] = useState([]);
  const [raceDesc, setRaceDesc] = useState("");
  const [displayHealth, setDisplayHealth] = useState(0);
  const [displayWealth, setDisplayWealth] = useState(0);
  const [displayLevel, setDisplayLevel] = useState(0);
  const traitVals = {
    name: null,
    playerName: null,
    race: null,
    subRace: null,
    raceDesc: null,
    healthbar: null,
    charClass: null,
    wealth: null,
    level: null
  };
  const [traits, setTraits] = useState(traitVals);

  useEffect(() => {
    console.log("Initial Parameters");
    for (const [key, value] of Object.entries(traits)) {
      console.log(`${key}:`, value);
    }
  }, []);


  useEffect(() => {
    console.log("---------------------------------------");
    console.log("UPDATED PARAMS");

    for (const [key, value] of Object.entries(traits)) {
      console.log(`${key}:`, value);
    }
  }, [traits]);

  const handleRaceClick = async (race) => {
    try {
      const res = await fetch(`http://localhost:5133/Options/${encodeURIComponent(race)}/subRaces`);

      if (!res.ok) throw new Error('Request failed');
      const data = await res.json();
      setSubRaceOptions(data);
    } catch (err) {
      console.error('Error fetching Sub Race list: ', err);
    }

  };

  const handleSubRaceClick = async (race, subRace) => {
    try {
      const res = await fetch(`http://localhost:5133/Options/${encodeURIComponent(race)}/${encodeURIComponent(subRace)}/raceDesc`);
      if (!res.ok) throw new Error('Request failed');
      const text = await res.text();
      try {
        const data = JSON.parse(text);
        setRaceDesc(data.description);
        updateField('raceDesc', data.description);



      } catch (e) {
        console.error("Not valid JSON lol", e.message);
      }
    } catch (err) {
      console.error('Error fetching race description: ', err);
    }

  };




  const updateField = (field, value) => {
    setTraits(prev => ({
      ...prev,
      [field]: value
    }));
  };


  useEffect(() => {
    fetch('http://localhost:5133/Options/races')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch race options');
        return res.json();
      })
      .then((data) => {
        setRaceOptions(data);
        // setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        // setError(err.message);
        // setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:5133/Options/classes')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch race options');
        return res.json();
      })
      .then((data) => {
        setClassOptions(data);
        // setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        // setError(err.message);
        // setLoading(false);
      });
  }, []);

  let RaceList = function () {
    return (
      <>
        <div id="listBox">
          <h2 id="subheading">Select your Race</h2>
          <ul id="traitList">
            {raceOptions.map((opt) => (
              <li><button key={opt} onClick={() => {
                handleRaceClick(opt);
                updateField('race', opt);
              }}>
                {opt}
              </button></li>
            ))}
          </ul>
        </div>
      </>
    );
  };

  let ClassList = function () {
    return (
      <>
        <div id="listBox">
          <h2 id="subheading">Select your Class</h2>
          <ul id="traitList">
            {classOptions.map((opt) => (
              <li><button key={opt} onClick={() => updateField('charClass', opt)}>{opt}</button></li>
            ))}
          </ul>
        </div>
      </>
    );
  };

  let SubRaceList = function () {
    return (
      <>
        <div id="listBox">
          <h2 id="subheading">Select your Sub Race</h2>
          <ul id="traitList">
            {subRaceOptions.map((opt) => (
              <li><button key={opt} onClick={() => {
                handleSubRaceClick(traits.race, opt)
                updateField('subRace', opt)
              }}>{opt}</button></li>
            ))}
          </ul>
        </div>
      </>
    );
  };

  let RaceDescList = function () {
    return (
      <>
        <div id="listBox">
          <h2 id="subheading">This is your Race description</h2>
          <p>{raceDesc}</p>
        </div>
      </>
    );

  };
  // const handleChange = (e) => {
  //   setNameBlank(e.target.value);
  // };
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("myInput");
    const playerName = formData.get("myInput2");
    if (name) updateField('name', name);
    if (playerName) updateField('playerName', playerName);
  };

  let NameBlank = function () {
    return (
      <>
        <div id="listBox">
          <h2 id="subheading">Your Name</h2>

          <form onSubmit={handleSubmit}>
            <input name="myInput" />
            <button type="submit">Select</button>
          </form>
          <p>Name: {traits.name}</p>

        </div>
      </>
    );
  }

  let PlayerNameBlank = function () {
    return (
      <>
        <div id="listBox">
          <h2 id="subheading">Select Your Character's Name</h2>

          <form onSubmit={handleSubmit}>
            <input name="myInput2" />
            <button type="submit">Select</button>
          </form>
          <p>Player Name: {traits.playerName}</p>

        </div>
      </>
    );
  }

  let HealthRoll = function () {
    const randomRoll = Math.floor(Math.random() * 8) + 3;
    return (
      <div id="rollBox">
        <h2 id="subheading">Roll For Your Health</h2>
        <p>Health: {displayHealth}</p>
        <button onClick={() => {
          setDisplayHealth(randomRoll)
          updateField("healthbar", randomRoll)
        }}>
          Roll
        </button>
      </div>
    )
  }

  let WealthRoll = function () {
    const randomRoll = Math.floor(Math.random() * 200) + 50;
    return (
      <div id="rollBox">
        <h2 id="subheading">Roll For Your Wealth</h2>
        <p>Wealth: {displayWealth}</p>
        <button onClick={() => {
          setDisplayWealth(randomRoll)
          updateField("wealth", randomRoll)
        }}>
          Roll
        </button>
      </div>
    )
  }

  async function postCharacter() {
    const response = await fetch('http://localhost:5133/Character', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: traits.name,
        playerName: traits.playerName,
        race: traits.race,
        subRace: traits.subRace,
        raceDesc: traits.raceDesc,
        healthbar: traits.healthbar,
        charClass: traits.charClass,
        wealth: traits.wealth,
        level: 1,
        userId: 1,
        username: "apple"
      }),
    });

    const data = await response.json();
    console.log(data)
  }


  return (
    <div className="traits">      <h1>Build Your Character</ h1>
      <div className="selectionArea">
        <NameBlank />
        <PlayerNameBlank />
        <RaceList />
        <ClassList />
        <SubRaceList />
        <RaceDescList raceDesc={raceDesc} />
      </div>
      <h1> Roll For Your Stats</ h1>
      <div className="statsArea">
        <HealthRoll />
        <WealthRoll />
      </div>
      <button onClick={postCharacter}>Send</button>;

    </div>

  );
}

export default Traits;

