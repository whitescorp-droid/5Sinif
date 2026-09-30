import React from 'react';
import { AngleProtractorLab } from '../labs/AngleProtractorLab';
import { TrianglePolygonsLab } from '../labs/TrianglePolygonsLab';
import { EuclidCirclesLab } from '../labs/EuclidCirclesLab';
import { GeometryLinesLab } from '../labs/GeometryLinesLab';
import { AreaPerimeterLab } from '../labs/AreaPerimeterLab';
import { MoonPhasesOrbitLab } from '../labs/MoonPhasesOrbitLab';
import { ForceDynamometerLab } from '../labs/ForceDynamometerLab';
import { LightShadowLab } from '../labs/LightShadowLab';
import { ElectricCircuitLab } from '../labs/ElectricCircuitLab';
import { EnglishDialogueLab } from '../labs/EnglishDialogueLab';

export const InteractiveLabActivity = ({ topic, subjectId, onFinish }) => {
  const labType = topic.interactiveLab?.type;

  switch (labType) {
    case 'english-dialogue-lab':
    case 'english-school-lab':
    case 'english-classroom-lab':
      return <EnglishDialogueLab topic={topic} onFinish={onFinish} />;
    case 'angle-protractor':
      return <AngleProtractorLab topic={topic} onFinish={onFinish} />;
    case 'triangle-polygons':
      return <TrianglePolygonsLab topic={topic} onFinish={onFinish} />;
    case 'euclid-circles':
      return <EuclidCirclesLab topic={topic} onFinish={onFinish} />;
    case 'geometry-lines':
      return <GeometryLinesLab topic={topic} onFinish={onFinish} />;
    case 'area-perimeter':
      return <AreaPerimeterLab topic={topic} onFinish={onFinish} />;
    case 'moon-phases-orbit':
      return <MoonPhasesOrbitLab topic={topic} onFinish={onFinish} />;
    case 'force-dynamometer':
      return <ForceDynamometerLab topic={topic} onFinish={onFinish} />;
    case 'light-shadow':
      return <LightShadowLab topic={topic} onFinish={onFinish} />;
    case 'electric-circuit':
      return <ElectricCircuitLab topic={topic} onFinish={onFinish} />;
    default:
      return (
        <div className="lab-fallback-card p-8 bg-slate-900/80 rounded-2xl border border-slate-700 text-center max-w-xl mx-auto my-8">
          <div className="text-4xl mb-3">🔬</div>
          <h3 className="text-lg font-bold text-cyan-400 mb-2">Keşif Laboratuvarı</h3>
          <p className="text-slate-300 text-sm">
            Bu konu için etkileşimli simülatör hazırlanıyor.
          </p>
        </div>
      );
  }
};
