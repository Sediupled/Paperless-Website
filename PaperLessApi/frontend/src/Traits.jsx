import { useEffect, useState } from 'react';

function Traits() {
  const [raceOptions, setRaceOptions] = useState([]);
  const [classOptions, setClassOptions] = useState([]);
  const [subRaceOptions, setSubRaceOptions] = useState([]);
  const [raceDesc, setRaceDesc] = useState("");
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
    console.log("Updated Parameters");

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

      } catch (e) {
        console.error("Not valid JSON lol", e.message);
      }
    } catch (err) {
      console.error('Error fetching Sub Race list: ', err);
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

  // useEffect(() => {
  //   fetch('http://localhost:5133/Options/subRace')
  //     .then((res) => {
  //       if (!res.ok) throw new Error('Failed to fetch race options');
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setSubRaceOptions(data);
  //       // setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       // setError(err.message);
  //       // setLoading(false);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch('http://localhost:5133/Options/raceDesc')
  //     .then((res) => {
  //       if (!res.ok) throw new Error('Failed to fetch race options');
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setRaceDescOptions(data);
  //       // setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       // setError(err.message);
  //       // setLoading(false);
  //     });
  // }, []);

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
              <li><button key={opt} onClick={() => updateField('class', opt)}>{opt}</button></li>
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

  let RaceDescList = function ({ raceDesc }) {
    return (
      <>
        <div id="listBox">        <h2 id="subheading">This is your Race description</h2>
          <p>{raceDesc}</p>
        </div>
      </>
    );

  };


  return (
    <div className="traits">
      <RaceList />
      <ClassList />
      <SubRaceList />
      <RaceDescList raceDesc={raceDesc} />
    </div>
  );
}

export default Traits;

