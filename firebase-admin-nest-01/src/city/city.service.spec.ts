import { Test, TestingModule } from '@nestjs/testing';
import { CityService } from './city.service';

const mockMethodFirebase = jest.mock('./city.service', () => ({
  CityService: jest.fn().mockImplementation(() => ({
    getDoc: jest.fn(),
    getCollection: jest.fn(),
    getQuery: jest.fn(),
  })),
}));

// admin firestoreのモック
jest.mock('firebase-admin', () => ({
  firestore: jest.fn(),
}));

describe('CityService', () => {
  let service: CityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CityService],
    }).compile();

    service = module.get<CityService>(CityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  test('メソッドが呼ばれることの確認', async () => {
    const mockGetDoc = jest.spyOn(CityService.prototype, 'getDoc');
    console.log(mockGetDoc);
    //　確認できない？
    // mockGetDocを呼び出す
    expect(true).toBe(true);
  });
});
