// Versions taken from parse-pdf module

type Version = 'default' | 'v1.9.426' | 'v1.10.100' | 'v1.10.88' | 'v2.0.550';

export interface ParsedPDFData {
    numpages: number;
    numrender: number;
    info: any;
    metadata: any;
    version: Version;
    text: string;
}
