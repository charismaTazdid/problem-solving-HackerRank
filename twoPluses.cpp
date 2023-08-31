// Problem: https://www.hackerrank.com/challenges/two-pluses

struct Plus { int x, y, l, s; };

bool notOverlap(Plus const& a, Plus const& b)
{
  return (a.y != b.y || a.x-a.l > b.x+b.l || b.x-b.l > a.x+a.l)
    && (a.x != b.x || a.y-a.l > b.y+b.l || b.y-b.l > a.y+a.l)
    && (b.x<a.x-a.l || b.x>a.x+a.l || b.y-b.l>a.y || b.y+b.l<a.y)
    && (a.x<b.x-b.l || a.x>b.x+b.l || a.y-a.l>b.y || a.y+a.l<b.y);
}

int twoPluses(vector<string> g)
{  
  vector<Plus> p;
  int SX = (int)g[0].size(), SY = (int)g.size(), m = 0;
  for (int Y = 0; Y < SY; Y++)
    for (int X = 0; X < SX; X++)
      if (g[Y][X] == 'G')
        for(int l = 1; l > 0; l++)
          for (int d = l; d >= -l && l > 0; d -= 2*l) 
            for (int x=X, y=Y+d; y != Y-d && l>0; x+=d, y-=d)
              if (x<0 || y<0 || x>=SX || y>=SY || g[y][x]!='G')
                while (--l >= 0) 
                  p.push_back({ X, Y, l, 1+4*l });
  for (size_t i = 0; i < p.size(); i++)
    for (size_t j = i + 1; j < p.size(); j++)
      if (notOverlap(p[i], p[j])) m = max(m, p[i].s * p[j].s);
  return m;
}

// Done