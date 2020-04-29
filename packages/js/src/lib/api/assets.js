const getRandom = (max, min) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const riskDownTime = {
  headerTitle: "Downtime track ",
  event: {
    description: "Risk of downtime on Truck 12",
    timestamp: "2 minutes ago",
    schedule: "fix now"
  },
  relatedAssets: "Track A, Zone 15 Brake"
};

const severeBreakdown = {
  headerTitle: "Track severe ",
  event: {
    description: "Track severe breakdown",
    timestamp: "2 hours ago",
    schedule: "fix 3rd shift"
  },
  relatedAssets: "Track B, Load 2 Brake"
};

const generateData = id => {
  const risk = getRandom(100, 1);
  const timeHorizon = getRandom(8, 1);
  const data = getRandom(10, 1) % 2 === 0 ? riskDownTime : severeBreakdown;

  return {
    headerTitle: data.headerTitle + (id + 1),
    id: `id_${id}`,
    event: data.event,
    probability: risk,
    timeHorizon,
    relatedAssets: data.relatedAssets,
    checkboxValue: `id_${id}`
  };
};

const generateAssets = () => {
  const assets = { data: [] };

  for (let i = 0; i < 20; i += 1) {
    const data = generateData(i);
    assets.data.push(data);
  }

  return assets;
};

const fetchAssets = async () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(generateAssets()), 500);
  });
};

const fetchAsset = async id => {
  return new Promise(resolve => {
    setTimeout(() => resolve(generateData(id.split("_")[1])), 500);
  });
};

export { fetchAssets, fetchAsset };