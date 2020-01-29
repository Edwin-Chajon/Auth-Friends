const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();
const token =
  'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';

let nextId = 7;
data
let data = [
    {
      row: "row-9p8t.9ffp~a7ju",
      id: "00000000-0000-0000-5283-D7D7DBC0FE38",
      date: "2006-01-01T00:00:00",
      location: "US",
      type: "Gasoline - Regular",
      price: "2.314",
      currency: "Dollars"
    },
    {
      row: "row-zcgi.vqae.fhzv",
      id: "00000000-0000-0000-C989-33013C8B194E",
      date: "2006-01-01T00:00:00",
      location: "US",
      type: "Gasoline - Midgrade",
      price: "2.457",
      currency: "Dollars"
    },
    {
      row: "row-t4wb~qbzt-f5sg",
      id: "00000000-0000-0000-C9D8-BF6ED46A19A7",
      date: "2006-01-01T00:00:00",
      location: "US",
      type: "Gasoline - Premium",
      price: "2.546",
      currency: "Dollars"
    },
    {
      row: "row-xpjx_bv96~sjce",
      id: "00000000-0000-0000-089B-DBA43008EB1D",
      date: "2006-01-01T00:00:00",
      location: "US",
      type: "Diesel",
      price: "2.568",
      currency: "Dollars"
    },
    {
      row: "row-hh38.579b.whq8",
      id: "00000000-0000-0000-6AFA-F1E284872F28",
      date: "2006-01-01T00:00:00",
      location: "State of Hawaii",
      type: "Gasoline - Regular",
      price: "2.800",
      currency: "Dollars"
    },
    {
      row: "row-h8ae.4ah9_vc8j",
      id: "00000000-0000-0000-791D-D35B0B4525C2",
      date: "2006-01-01T00:00:00",
      location: "State of Hawaii",
      type: "Gasoline - Midgrade",
      price: "2.961",
      currency: "Dollars"
    },
    {
      row: "row-qux6~fpy6~4cpw",
      id: "00000000-0000-0000-3EFE-430EC3D1C173",
      date: "2006-01-01T00:00:00",
      location: "State of Hawaii",
      type: "Gasoline - Premium",
      price: "3.016",
      currency: "Dollars"
    },
    {
      row: "row-ptx3_ji8w-gkdq",
      id: "00000000-0000-0000-4F79-8210C40DACAE",
      date: "2006-01-01T00:00:00",
      location: "State of Hawaii",
      type: "Diesel",
      price: "3.271",
      currency: "Dollars"
    },
    {
      row: "row-jpv2-z8hb_c2p2",
      id: "00000000-0000-0000-3ACB-CC0B35388DC2",
      date: "2006-01-01T00:00:00",
      location: "Honolulu",
      type: "Gasoline - Regular",
      price: "2.714",
      currency: "Dollars"
    },
    {
      row: "row-w52j-5cpj_jhck",
      id: "00000000-0000-0000-EBDB-E53605A68B8D",
      date: "2006-01-01T00:00:00",
      location: "Honolulu",
      type: "Gasoline - Midgrade",
      price: "2.870",
      currency: "Dollars"
    },
    {
      row: "row-nsry.5c7n-kyaw",
      id: "00000000-0000-0000-8E77-FCDB7CED49B9",
      date: "2006-01-01T00:00:00",
      location: "Honolulu",
      type: "Gasoline - Premium",
      price: "2.924",
      currency: "Dollars"
    },
    {
      row: "row-7pp2.7css.2i2n",
      id: "00000000-0000-0000-D69C-04B635490D76",
      date: "2006-01-01T00:00:00",
      location: "Honolulu",
      type: "Diesel",
      price: "3.250",
      currency: "Dollars"
    },
    {
      row: "row-7izx_w2bk.27et",
      id: "00000000-0000-0000-168E-10A8A575E129",
      date: "2006-01-01T00:00:00",
      location: "Wailuku",
      type: "Gasoline - Regular",
      price: "3.057",
      currency: "Dollars"
    },
    {
      row: "row-yvp9_4k4c-2c2c",
      id: "00000000-0000-0000-818D-E00AF0E2E2A4",
      date: "2006-01-01T00:00:00",
      location: "Wailuku",
      type: "Gasoline - Midgrade",
      price: "3.233",
      currency: "Dollars"
    },
    {
      row: "row-p8wz-i6ky.6tj7",
      id: "00000000-0000-0000-6FEC-CEBB4E7FF00E",
      date: "2006-01-01T00:00:00",
      location: "Wailuku",
      type: "Gasoline - Premium",
      price: "3.293",
      currency: "Dollars"
    },
    {
      row: "row-vgfg-p5bs.qycq",
      id: "00000000-0000-0000-8225-A0C985CA088A",
      date: "2006-01-01T00:00:00",
      location: "Wailuku",
      type: "Diesel",
      price: "3.475",
      currency: "Dollars"
    },
    {
      row: "row-j62j_yufd-3fxf",
      id: "00000000-0000-0000-C098-C3EE10BDA95A",
      date: "2006-01-01T00:00:00",
      location: "Hilo",
      type: "Gasoline - Regular",
      price: "2.856",
      currency: "Dollars"
    },
    {
      row: "row-ryh9_vp2t.5qy6",
      id: "00000000-0000-0000-A61A-D1CCEAA42EA1",
      date: "2006-01-01T00:00:00",
      location: "Hilo",
      type: "Gasoline - Midgrade",
      price: "3.020",
      currency: "Dollars"
    },
    {
      row: "row-qpz7_sxej-3qt9",
      id: "00000000-0000-0000-6EB9-67CFA15F012C",
      date: "2006-01-01T00:00:00",
      location: "Hilo",
      type: "Gasoline - Premium",
      price: "3.076",
      currency: "Dollars"
    },
    {
      row: "row-trqb_e8cw_pv33",
      id: "00000000-0000-0000-D7C4-44C2EF689D13",
      date: "2006-01-01T00:00:00",
      location: "Hilo",
      type: "Diesel",
      price: "3.088",
      currency: "Dollars"
    },
    {
      row: "row-pz8f_ms69.6rwb",
      id: "00000000-0000-0000-4523-E5D52CF7E67A",
      date: "2006-02-01T00:00:00",
      location: "US",
      type: "Gasoline - Regular",
      price: "2.285",
      currency: "Dollars"
    },
    {
      row: "row-htsw_md77-6p5g",
      id: "00000000-0000-0000-7276-E2B8A14396F2",
      date: "2006-02-01T00:00:00",
      location: "US",
      type: "Gasoline - Midgrade",
      price: "2.427",
      currency: "Dollars"
    },
    {
      row: "row-844w.vx4a-rhcw",
      id: "00000000-0000-0000-B8EC-8A6FF505C337",
      date: "2006-02-01T00:00:00",
      location: "US",
      type: "Gasoline - Premium",
      price: "2.515",
      currency: "Dollars"
    },
    {
      row: "row-ujnw_szu2-jzc3",
      id: "00000000-0000-0000-7EB0-649217E9572C",
      date: "2006-02-01T00:00:00",
      location: "US",
      type: "Diesel",
      price: "2.568",
      currency: "Dollars"
    },
    {
      row: "row-jc9i_8mhb~4dzv",
      id: "00000000-0000-0000-92EE-3488C4EB7B5B",
      date: "2006-02-01T00:00:00",
      location: "State of Hawaii",
      type: "Gasoline - Regular",
      price: "2.827",
      currency: "Dollars"
    },
    {
      row: "row-xtr8.chix_7xiy",
      id: "00000000-0000-0000-3C50-F6E0D6DC40CA",
      date: "2006-02-01T00:00:00",
      location: "State of Hawaii",
      type: "Gasoline - Midgrade",
      price: "2.989",
      currency: "Dollars"
    }
];

app.use(bodyParser.json());

app.use(cors());

function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: 'User must be logged in to do that.' });
  }
}

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'Edwin' && password === '123') {
    req.loggedIn = true;
    res.status(200).json({
      payload: token
    });
  } else {
    res
      .status(403)
      .json({ error: 'Username or Password incorrect. Please see Readme' });
  }
});

app.get('/api/data', authenticator, (req, res) => {
  setTimeout(() => {
    res.send(data);
  }, 1000);
});

app.get('/api/data/:id', authenticator, (req, res) => {
  const friend = data.find(f => f.id == req.params.id);

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).send({ msg: 'Friend not found' });
  }
});

app.post('/api/data', authenticator, (req, res) => {
  const friend = { id: getNextId(), ...req.body };

  data = [...data, friend];

  res.send(data);
});

app.put('/api/data/:id', authenticator, (req, res) => {
  const { id } = req.params;

  const friendIndex = data.findIndex(f => f.id == id);

  if (friendIndex > -1) {
    const friend = { ...data[friendIndex], ...req.body };

    data = [
      ...data.slice(0, friendIndex),
      friend,
      ...data.slice(friendIndex + 1)
    ];
    res.send(data);
  } else {
    res.status(404).send({ msg: 'Friend not found' });
  }
});

app.delete('/api/data/:id', authenticator, (req, res) => {
  const { id } = req.params;

  data = data.filter(f => f.id !== Number(id));

  res.send(data);
});

function getNextId() {
  return nextId++;
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
npm